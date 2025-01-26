// components/QuizList.tsx
import React from "react";
import { Quiz } from "../types/quizz";
import { useNavigate } from 'react-router-dom';

interface QuizListProps {
  quizzes: Quiz[];
}

const QuizList: React.FC<QuizListProps> = ({ quizzes }) => {
  const navigate = useNavigate();
  const handleViewQuiz = (quizId: string) => {
    navigate(`/quiz/${quizId}`); 
  };
  console.log(quizzes);
  return (
    <div className="row">
      {quizzes.map((quiz) => (
        <div key={quiz._id} className="mb-4">
          <div className="card mb-3 border-0" style={{ cursor: "pointer" }}>
            <div className="row g-0">
              <div className="card-body">
                <h5 className="card-title">{quiz.title}</h5>
                <p className="card-text">{quiz.description}</p>
                <button className="btn btn-outline-green w-100" onClick={()=> handleViewQuiz(quiz._id)}>View Quiz</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
