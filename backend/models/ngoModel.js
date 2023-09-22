const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ngoSchema = new mongoose.Schema({
    name : {
        type: String,
        required:[true,'Name is required'],
        unique : true,
    }, 
    email : {
        type:String,
        required : true,
        unique : true,
    },
    password : {
        type:String ,  //password will be stored as a string in the database
        required : true,
    },
    role : {
        type:Number,//1 for ngo, 2 for experts.
        default : 1,
    }
},
{
    timestamps : true,
});

ngoSchema.pre('save', async function (next){
    if(!this.isModified()){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

ngoSchema.methods.matchPasswords = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

const Ngo = mongoose.model('ngos', ngoSchema);

module.exports = Ngo;