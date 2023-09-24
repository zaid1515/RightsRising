const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type : String,
        required:[true,'Title is required'],
        },
        summary : {
            type :String,
            required : [true, `summary is required.`],
        },
        content : {
            type : String,
            required : true,            
        },
        cover : {
            /* type : Buffer ,  //Buffer is a data structure that contains binary data. It’s used to represent raw data buffers (that may contain text */
            type : String,
        },
        author : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'ngos',
            required : true
        }
},
{
    timestamps : true,
});

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;