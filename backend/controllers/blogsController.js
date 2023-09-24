const asyncHandler = require('express-async-handler');
const Blog = require('../models/blogModel');

/*
@Desc : to create/ post a new blog
@route : POST /api/blogs/create
@access : private
*/

const createBlog = asyncHandler( async(req, res) => {
    const {title, summary, content, file} = req.body;
    if(!title || !summary || !content || !file){
        return res.status(400).json({
            message : `All fields are required.`,
        });
    }

    const filePath = req.file.path;

    const newBlog = await Blog.create({
        title,
        summary,
        content,
        cover : filePath,
    });

    if(newBlog){
        return 	res.status(201).json({
            message: 'New blog created successfully.',
            blog : newBlog,
        });
    } else {
        res.json(400);
        throw new Error(`Invalid blog data.`);
    }
})



module.exports = {
    createBlog
}