// pages/Quizzes.tsx
import React, { useState, useEffect } from 'react';
import QuizList from '../components/QuizList.tsx';
import quizService from '../services/quizService.ts';
import { Quiz } from '../types/quizz';

const Quizzes: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);


  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const data = await quizService.getQuizzes();
      setQuizzes(data);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };


  return (
    <div className="py-5 px-3" style={{ background: "#fff" }}>
      <h1> Quizzes </h1>
      <p className='text-muted'>what's due</p>
        <QuizList quizzes={quizzes} />

    </div>
  );
};

export default Quizzes;