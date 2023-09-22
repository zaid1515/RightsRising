const jwt = require('jsonwebtoken');

require('dotenv').config();

const ngoToken = (res, ngoId) => {
    const token = jwt.sign({ngoId}, process.env.JWT_SEC, {
        expiresIn : '7d',
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure   : process.env.NODE_ENV === 'development',
        sameSite  : "strict", // CSRF mitigation
        maxAge    : 1000*60*60*24*7
    })
}

module.exports = ngoToken;