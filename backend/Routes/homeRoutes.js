const Router = require('express').Router();
const homeController = require('../controllers/homeController');

Router.route('/')
    .get(homeController.getRole);

module.exports = Router;