const quizService = require("../services/quiz.service");

const getAllQuizzes = async (req, res, next) => {
  try {
    const quizzes = await quizService.getAllQuizzes();
    res.status(200).json(quizzes);
  } catch (error) {
    next(error);
  }
};

const createQuiz = async (req, res, next) => {
  try {
    const newQuiz = await quizService.createQuiz(req.body);
    res.status(201).json(newQuiz);
  } catch (error) {
    next(error);
  }
};

const updateQuiz = async (req, res, next) => {
  try {
    const updatedQuiz = await quizService.updateQuiz(req.params.id, req.body);
    res.status(200).json(updatedQuiz);
  } catch (error) {
    next(error);
  }
};

const deleteQuiz = async (req, res, next) => {
  try {
    await quizService.deleteQuiz(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const getOneQuizByID = async (req, res, next) => {
  try {
    const quiz = await quizService.getOneQuizByID(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getOneQuizByID,
};
