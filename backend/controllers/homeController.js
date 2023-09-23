const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Ngo = require('../models/ngoModel');

require('dotenv').config();

/*
@Desc : get the role and state for the website
@Route : GET /
@access : public
*/  
const getRole = asyncHandler( async(req, res) => {
    let token = req.cookies.jwt;

    if(token){
        try{
            const decoded = await jwt.verify(token, process.env.JWT_SEC);
            const role = decoded.role;

            if(role === 0){
                const user = await User.findById(decoded.objId).select('-password');

                if(!user){
                    return res.status(404).json({
                        message : 'User not found.',
                        role : 3,
                    });
                }

                return res.status(201).json({
                    message : `Loggin successfull`,
                    role : role,
                    user
                });
            } else{

                const ngo = await Ngo.findById(decoded.objId).select('-password');

                if(!ngo){
                    return res.status(404).json({
                        message : 'ngo not found.',
                        role : 3,
                    });
                }

                return res.status(201).json({
                    message : `Loggin successfull`,
                    role : role,
                    ngo
                });
            }
        }catch(err){
            res.status(400).json({
                message : `Invalid Token, please login again.`,
                role : 3,
            })
        }
    } else {
        return res.status(200).json({
            message : `Login to access the features.`,
            role : 3,
        })
    }
})

module.exports = {
    getRole
}