const db = require("../db/dbConfig.js")

//Index
const getAllQuizzes = async () => {
    try {
        const allQuizzes = await db.any(`SELECT * FROM quiz`);
        return allQuizzes
    } catch (error) {
        return error
    }
}

//Show
const getOneQuiz = async (id) => {
    try {
        const oneQuiz = await db.one(`SELECT * FROM quiz WHERE id=$1`, id);
        return oneQuiz
    } catch (error) {
        return error
    }
}

module.exports = {getAllQuizzes, getOneQuiz}