const Router = require('express').Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

/*
@ Desc : route to create a new user.
*/
Router.post('/auth', userController.authUser);

/*
@ Desc : route to register a new user.
*/
Router.post('/', userController.registerUser);

/*
@ Desc : route to get profile of a user and update it.
*/
Router.route('/profile')
    .get(protect, userController.getUserPorfile)
    .put(protect, userController.updateUserProfile);

/*
@ Desc : route to logout user.
*/
Router.post('/logout', userController.logoutUser);


module.exports = Router;