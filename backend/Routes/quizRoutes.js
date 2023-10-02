const Router = require('express').Router();
const quizController = require('../controllers/quizController');

Router.route('/')
    .post(quizController.createQuiz);

module.exports = Router;