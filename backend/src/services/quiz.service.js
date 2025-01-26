const Quiz = require('../models/quiz.model');

const getAllQuizzes = async () => {
  return await Quiz.find({});
};

const createQuiz = async (quizData) => {
  const newQuiz = new Quiz(quizData);
  return await newQuiz.save();
};

const updateQuiz = async (quizId, quizData) => {
  return await Quiz.findByIdAndUpdate(quizId, quizData, { new: true });
};

const deleteQuiz = async (quizId) => {
  return await Quiz.findByIdAndDelete(quizId);
};

const getOneQuizByID = async (quizId) => {
    return await Quiz.findById(quizId);
  };

module.exports = {
  getAllQuizzes,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getOneQuizByID,
};
