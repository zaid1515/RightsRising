const Ngo = require('../models/ngoModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

/*
@Desc : To register a new ngo/expert
@Route : POST /api/ngo
@access : public
*/
const registerNgo = asyncHandler( async(req, res) => {
    const {name, email, password, role} = req.body;

    if(!name || !email || !password){
        throw new Error(`All Fields are required.`);
    }

    const emailExist = await Ngo.findOne({email : email});
    if(emailExist){
        throw new Error(`${email} is already registered`);
    }

    const newNgo = await Ngo.create({
        name,
        email,
        password
    });

    if(newNgo){
        res.status(200).json({
            message : `Ngo registerd successfully`,
        })
    } else {
        res.status(400);
        throw new Error(`Invalid user data.`);
    }
});


/*
@Desc : To authenticate ngo/expert
@Route : POST /api/ngo/auth
@access : public
*/

const authNgo = asyncHandler( async(req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        throw new Error('Email or Password not provided.');
    }

    const ngo = await Ngo.findOne({email});

    if(ngo && (await ngo.matchPasswords(password))){
        generateToken(res, ngo._id, ngo.role);
        res.status(200).json({
            _id : ngo._id,
            name : ngo.name,
            email : ngo.email,
            message : `Successfully aithenticated`,
        });
    } else {
        res.status(401);
        throw new Error(`Invalid email or password.`);
    }
});

/*
@Desc : To get the ngo/expert profile
@Route : GET /api/ngo/profile
@access : private
*/

const ngoProfile = asyncHandler( async(req, res) => {
    const ngo = {
        _id: req.ngo._id,
        name: req.ngo.name,
        email : req.ngo.email,
        role : req.ngo.role
    }

    res.status(200).json(ngo);
});

/*
@Desc : To logout ngo/expert
@Route : POST /api/ngo/logout
@access : private
*/
const logoutNgo = asyncHandler( async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly : true,
        expires   : new Date(0), 
        path : '/'
    })

    res.status(201).json({
        message: `Ngo logged out.`,
    });
});

/*
@Desc : To update a ngo/expert profile
@Route : POST /api/ngo/logout
@access : private
*/
const updateNgoProfile = asyncHandler( async(req, res) => {
    const ngo = await Ngo.findById(req.user._id);

    if(ngo){
        // if the email is passed to cget updated.
        if(req.body.email){
            const chkEmail = req.body.email;
            const duplicate = await Ngo.findOne({email : chkEmail});

            if(duplicate && duplicate._id.toString() !== user._id.toString()){
                res.status(400);
                console.log(`no unique email`);
                throw new Error(`email address is already in use.`);
            } else {
                console.log(`unique email`);
                ngo.email = req.body.email;
            }
        }

        ngo.name = req.body.name || ngo.name;
        if (req.body.password) {
            ngo.password = req.body.password;
        }

        const updatedNgo = await ngo.save();
        res.status(200).json({
            _id : updatedNgo._id,
            name : updatedNgo.name,
            email : updatedNgo.email,
        });

    } else {
        res.status(404);
        throw new Error(`ngo not found.`)
    }
});


module.exports = {
    ngoProfile,
    registerNgo,
    authNgo,
    logoutNgo,
    updateNgoProfile
}