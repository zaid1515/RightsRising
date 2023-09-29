const mongoose = require('mongoose');
const _ = require('loda')

const otpSchema = new mongoose.Schema({
    number : {
        type : String,
        required : true,
    },
    otp : {
        type : String,
        required : true,
    },
    createdAt : {type : Date, default: Date.now, index: {expires : 300}}
},
{
    timestamps : true,
});

const Otp = mongoose.model('otp', otpSchema);

module.exports = Otp;