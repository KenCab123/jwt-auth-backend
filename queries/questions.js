const db = require("../db/dbConfig.js")


//Index
const getAllQuestions = async (id) => {
    try {
        const AllQuestions = await db.any(`SELECT * FROM question WHERE quiz_id=$1`, id);
        return AllQuestions
    } catch (error) {
        return error
    }
}

module.exports = {getAllQuestions}
