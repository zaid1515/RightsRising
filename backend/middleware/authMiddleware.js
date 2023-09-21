const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

require('dotenv').config();

const protect = asyncHandler( async(req, res, next) => {
    let token;
    token = req.cookies.jwt

    if(token){  
        try{
            //verify the token
            const decoded = await jwt.verify(token, process.env.JWT_SEC)

            req.user = await User.findById(decoded.userId).select('-password');

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

module.exports = {
    protect,    
}