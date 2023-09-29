const asyncHandler = require('express-async-handler');
const Blog = require('../models/blogModel');
const fs = require('fs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

/*
@Desc : to create/ post a new blog
@route : POST /api/blogs/create
@access : private
*/

const createBlog = asyncHandler( async(req, res) => {
    const {title, summary, content} = req.body;
    if(!title || !summary || !content){
        return res.status(400).json({
            message : `All fields are required.`,
        });
    }

    if(!req.file){
        return res.status(400).json({
            message : `please Upload A cover image for Blog.`,
            code : 30,
        })
    }

    console.log('fille is : ',req.file);

    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path;

    fs.renameSync(path, newPath)
    console.log('new path : ', newPath);

    try{
    // await fs.promises.rename(path, newPath);
    let token = req.cookies.jwt;
    jwt.verify(token, process.env.JWT_SEC);
        if (err) {
            throw err;
        }

        const newBlog = await Blog.create({
            title,
            summary,
            content,
            cover: newPath,
            author: decoded.objId,
        });

        if (newBlog) {
            return res.status(201).json({
                message: "New blog created successfully.",
                blog: newBlog,
            });
        } else {
            res.json(400);
            throw new Error(`Invalid blog data.`);
        }
    }catch(err){
        throw new Error("error at blogs controller", err);
    }
})

/*
@Desc : to get all blogs
@route : Get /api/blogs
@access : private
*/

const getAllBlogs = asyncHandler( async(req, res) => {
    const blogs = await Blog.find();

    return res.status(200).json(blogs);
})



module.exports = {
    createBlog,
    getAllBlogs
}