const express = require("express");
const quizController = require("../controllers/quiz.controller");

const router = express.Router();

router
  .route("/")
  .get(quizController.getAllQuizzes)
  .post(quizController.createQuiz);

router
  .route("/:id")
  .put(quizController.updateQuiz)
  .delete(quizController.deleteQuiz)
  .get(quizController.getOneQuizByID);

module.exports = router;
