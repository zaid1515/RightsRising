const uploadImage = require('../middleware/uploadImageMiddlware');
const Blog = require('../models/blogModel');

const Router = require('express').Router();

/*
@Desc: to create/post a new blog.
*/
Router.post('/create', uploadImage.single('file'), async(req, res) => {
    console.log(req.body);
    console.log(req.file)

    if(!req.file){
        return res.status(400).json({
            message : `please Upload A cover image for Blog.`,
            code : 30,
        })
    }

    const {title, summary, content} = req.body;
    const filePath = req.file.path

    if(!title || !summary || !content){
        return res.status(400).json({
            message : `All fields are required for blog.`,
            code : 31,
        })
    }

    try{
        const newBlog = await Blog.create({
            title ,
            summary ,
            content,
            filePath,
        })
    }catch(err){}
});

module.exports = Router;
