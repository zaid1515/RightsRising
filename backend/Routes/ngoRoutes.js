
const { protectNgo } = require('../middleware/authMiddleware');
const ngoController = require('../controllers/ngoController');

const Router = require('express').Router();

/*
@Desc : Route to create/ register a new Ngo/expert
*/
Router.post('/', ngoController.registerNgo);

/*
@Desc : Route to authenticate Ngo/expert
*/
Router.post('/auth', ngoController.authNgo);

/*
@Desc : Route to get Ngo/expert profile
*/
Router.route('/profile')
    .get(protectNgo, ngoController.ngoProfile)
    .put(protectNgo, ngoController.updateNgoProfile);

/*
@Desc : Route to logout Ngo/expert profile
*/
Router.post('/logout', ngoController.logoutNgo);

module.exports = Router;

