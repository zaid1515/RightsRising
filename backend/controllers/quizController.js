const asyncHandler = require('express-async-handler');
const Quiz = require('../models/quizModel');


/*
@Desc : Route to create a new quiz.
@Route : POST /api/quiz
@access : Private
*/

const createQuiz = asyncHandler( async(req, res) => {

    const { title, description, questions, expirationDate, createdBy } = req.body;

    if(!title || !description || !questions || !expirationDate || !createdBy){
        return res.status(400).json({
            message : `All details are required to create quiz`,
        });
    }

    try{
        const newQuiz = Quiz.create({
            title,
            description,
            questions,
            expirationDate,
            createdBy 
        });

        if(newQuiz){
            return res.status(200).json(newQuiz)
        }
    } catch(err){
        console.log('error creating quiz : ', err);
        throw new Error(err);
    }
});

module.exports = {
    createQuiz,
}