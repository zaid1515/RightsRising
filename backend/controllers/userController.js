const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const sendOtp = require("../utils/generateOtp");

/*
@ Desc : Register a user.
@ router : POST /api/users
@ access : public 
*/
const registerUser = asyncHandler(async (req, res) => {

    const { username, email, password, age } = req.body;

    if (!username || !email || !password || !age) {
        throw new Error(`All fields are required.`);
    }

    const userExits = await User.findOne({ email: email });
    if (userExits) {
        throw new Error(`User already exist.`);
    }

    const user = await User.create({
        username,
        email,
        password,
        age,
    });

    if (user) {
        // generateToken(res, user._id);
        res.status(200).json({
        // _id: user.id,
        // username: user.username,
        // email: user.email,
        message:`user successfully registerd.`,
        });
    } else {
        res.status(400);
        throw new Error(`Invalid user data.`);
    }

    /*
        The below code is causing me cannot set headers error. this error is vry common and usually
        occurs when multiple responses are sended for a single http request. One request can only
        receive one response. So in this register user controler after sending the token and response in "if(user)" block, another response of confirmation was also eing sent.

        
        res.status(201).json({
            message: `User registerd.`,
        });
    */
});

/*
@ Desc : auth set the token.
@ router : POST /api/users/auth
@ access : public 
*/
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        console.log(`wrong password`);
        throw new Error('Email or Password not provided.');
    }

    const user = await User.findOne({email})

    if (user && (await user.matchPasswords(password))) {
        const otp = await sendOtp(email);
        generateToken(res, user._id, user.role);
        res.status(200).json({
            message : `User Login SuccessFull.`,
            auth : true,
            role : 0,
            client : {
                _id: user.id,
                username: user.username,
                email: user.email,
                age: user.age,
            },
            otp
        });
    } else {
        res.status(401);
        throw new Error(`Invalid email or password.`);
    }
});

/*
@ Desc : Logout the user.
@ router : POST /api/users/logout
@ access : public 
*/
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly : true,
        expires   : new Date(0), 
        path : '/'
    })

    res.status(201).json({
        message: `User logged out.`,
        auth : false,
        role : 3
    });
});

/*
@ Desc : Get user profile.
@ router : GET /api/users/profile
@ access : private 
*/
const getUserPorfile = asyncHandler(async (req, res) => {
    const user = {
        _id : req.user._id,
        username : req.user.username,
        email : req.user.email,
        age : req.user.age
    }

    res.status(201).json({
        message : `Fetched Profile.`,
        role : 1,
        user
    });
});

/*
@ Desc : update user profile.
@ router : PUT /api/users/profile
@ access : private 
*/
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if(user){
        // if the email is passed to cget updated.
        if(req.body.email){
            const chkEmail = req.body.email;
            const duplicate = await User.findOne({email : chkEmail});

            if(duplicate && duplicate._id.toString() !== user._id.toString()){
                res.status(400);
                console.log(`no unique email`);
                throw new Error(`email address is already in use.`);
            } else {
                console.log(`unique email`);
                user.email = req.body.email;
            }
        }

        user.username = req.body.username || user.username;
        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();
        res.status(200).json({
            message : `user updated.`,
            role : 1,
            user : {
            _id: updatedUser._id,
            username : updatedUser.username,
            email : updatedUser.email
        }
    })

    } else {
        res.status(404);
        throw new Error(`User not found.`)
    }
});

module.exports = {
    authUser,
    registerUser,
    getUserPorfile,
    updateUserProfile,
    logoutUser,
};
