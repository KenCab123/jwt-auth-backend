const db = require("../db/dbConfig.js")

//INDEX
const getAllStatuses = async () => {
    try {
        const userStatuses = await db.any(
            "SELECT * FROM status"
        )
        return userStatuses
    } catch (error) {
        
    }
}

const getUserStatuses = async (id) => {
    try {
        const userStatuses = await db.any(
            "SELECT * FROM status WHERE user_id=$1", id
        )
        return userStatuses
    } catch (error) {
        
    }
}

//CREATE
const createStatus = async (id, quiz_id) => {
    try {
        const newStatus = await db.one( "INSERT INTO status (quiz_id, user_id)VALUES($1, $2) RETURNING *", [quiz_id, id] )
        return newStatus
    } catch (error) {
        return error
    }
}

//DELETE
const deleteStatus = async (id, quiz_id) => {
    try {
        const deletedStatus = await db.one(
            "DELETE FROM status WHERE quiz_id=$1 AND user_id = $2 RETURNING *", [quiz_id, id]
        )
        return deletedStatus
    } catch (error) {
        return error
    }
}


module.exports = {getAllStatuses, getUserStatuses, createStatus, deleteStatus}