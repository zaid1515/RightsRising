const uploadImage = require('../middleware/uploadImageMiddlware');
const Blog = require('../models/blogModel');
const blogsController = require('../controllers/blogsController');

const Router = require('express').Router();

/*
@Desc: to create/post a new blog.
*/
Router.post('/create', uploadImage.single('file'), blogsController.createBlog);

/*
@ Desc : Route to get all the blogs.
*/
Router.get('/', blogsController.getAllBlogs);

module.exports = Router;
