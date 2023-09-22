const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Ngo = require('../models/ngoModel');

require('dotenv').config();

const protect = asyncHandler( async(req, res, next) => {
    let token;
    token = req.cookies.jwt

    if(token){  
        try{
            //verify the token
            const decoded = await jwt.verify(token, process.env.JWT_SEC)
            console.log(decoded);

            req.user = await User.findById(decoded.objId).select('-password');

            if (!req.user) {
            // Handle the case when no user is found, e.g., send an error response.
                return res.status(401).json({ message: "User not found" });
            }

            next();
        }catch(err){
            res.status(401);
            throw new Error(`Not authorised, invalid Token`);
        }
    } else {
        res.status(401);
        throw new Error("Not authorized to access this route"); 
    }
});

const protectNgo = asyncHandler( async(req, res, next) => {
    let ngoToken;
    ngoToken = req.cookies.jwt;

    if(ngoToken){
        try{
            const decodedNgo = await jwt.verify(ngoToken, process.env.JWT_SEC);

            req.ngo = await Ngo.findById(decodedNgo.objId).select('-password');

            if(!req.ngo){
                return res.status(400).json({
                    message : `Ngo not found`,
                });
            }

            next();
        } catch(err){
            res.status(401);
            throw new Error(`Not authorized to aceess this routes.`);
        }
    }  else {
        res.status(401);
        throw new Error("Not authorized to access this route"); 
    }
});

module.exports = {
    protect,    
    protectNgo,
}