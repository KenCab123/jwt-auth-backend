const express = require("express");

const {getAllReviews, getOneReview, createReview, updateReview, deleteReview} = require("../queries/reviews")
const {getOneQuiz} = require("../queries/quiz")

const reviews = express.Router({ mergeParams: true })

//index
reviews.get("/", async (req,res) => {
    const {id} = req.params;

    const allReviews = await getAllReviews(id)
    const quiz = await getOneQuiz(id)

    if(quiz.id) {
        res.status(200).json({ ...quiz, allReviews});
    } else {
        res.status(500).json({ error: 'server error'})
    }
})

//Show
reviews.get("/:review_id", async (req, res) => {
  const {review_id} = req.params
    const review = await getOneReview(review_id);
  
    if (review) {
      res.status(200).json({ review });
    } else {
      res.status(500).json({ error: "Review not found" });
    }
  });

  reviews.put("/:review_id", async (req, res) => {
    const { id, review_id } = req.params;
    const updatedReview = await updateReview({
      review_id,
      ...req.body,
      id,
    });

    if (updatedReview.id) {
      res.status(200).json(updatedReview);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  });


//Create
reviews.post("/", async (req,res) => {
    const {id} = req.params;

    const newReview = await createReview({...req.body, id})

    if (newReview.id) {
        res.status(200).json(newReview);
      } else {
        res.status(500).json({ error: "Failed to create review." });
      }
})


//Delete 
reviews.delete("/:review_id", async (req, res) => {
    const { review_id } = req.params;
  
    const deletedReview = await deleteReview(review_id);
  
    if (deletedReview.id) {
      res.status(200).json(deletedReview);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  });

module.exports = reviews