const express = require('express');

const quizzes = express.Router();

const reviewsController = require('./reviewsController.js')
const statusController = require('./statusController.js')

const {getAllQuizzes, getOneQuiz} = require("../queries/quiz")

quizzes.use('/:id/reviews', reviewsController)

//Index
quizzes.get('/', async (req,res) => {
    const allQuizzes = await getAllQuizzes();

    if(allQuizzes[0]){
        res.status(200).json(allQuizzes);
    } else {
        res.status(500).json({ error: "server error"})
    }
});

//Show
quizzes.get('/:id', async (req,res) => {
    const{ id } = req.params

    const quiz = await getOneQuiz(id);

    if(quiz){
        res.status(200).json(quiz);
    } else {
        res.status(500).json({ error: "server error"})
    }
});

module.exports = quizzes