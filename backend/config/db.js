const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async() => {
    try{
        const connection = mongoose.connect(process.env.DATABASE_URI);
    } catch(err){
        console.error(`Error : ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;