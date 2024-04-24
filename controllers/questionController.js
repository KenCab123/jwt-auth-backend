const express = require('express');

const questions = express.Router();


const {getAllQuestions} = require("../queries/questions")

//Index
questions.get('/:id', async (req,res) => {
    const { id } = req.params;
    const allQuestions = await getAllQuestions(id);
    
    if(allQuestions){
        res.status(200).json(allQuestions);
    } else {
        res.status(500).json({ error: "server error"})
    }
});

module.exports = questions