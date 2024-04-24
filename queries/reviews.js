const reviews = require("../controllers/reviewsController.js")
const db = require("../db/dbConfig.js")


const getAllReviews = async (id) => {
    try {
        const userAndReviews = await db.any(
            "SELECT reviews.*, users.username FROm reviews LEFT JOIN users on reviews.user_id = users.id WHERE quiz_id=$1", id
        )
        return userAndReviews
    } catch (error) {
        
    }
}

const getOneReview = async (id) => {
    try {
        const oneReview = await db.one(`SELECT * FROM reviews WHERE id=$1`, id);
        return oneReview
    } catch (error) {
        return error
    }
}

const createReview = async (review) => {
    try {
        const newReview = await db.one(
            `INSERT INTO reviews (content, rating, quiz_id, user_id, username) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [
                review.content,
                review.rating,
                review.quiz_id,
                review.user_id,
                review.username
            ]
        )
        return newReview
    } catch (error) {
        return error
    }
}

const updateReview = async (review) => {
    try {
      const updatedReview = await db.one(
        "UPDATE reviews SET content=$1, rating=$2, quiz_id=$3, user_id=$4 WHERE id=$5 RETURNING *",
        [
          review.content,
          review.rating,
          review.quiz_id,
          review.user_id,
          review.review_id,
        ]
      );
      return updatedReview;
    } catch (error) {
      return error;
    }
  };

  const deleteReview = async (id) => {
    try {
      const deletedReview = await db.one(
        "DELETE FROM reviews WHERE id = $1 RETURNING *",
        id
      );
      return deletedReview;
    } catch (error) {
      return error;
    }
  };
module.exports = {getAllReviews, getOneReview, createReview, updateReview, deleteReview}