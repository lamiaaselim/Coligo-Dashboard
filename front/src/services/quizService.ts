// services/quizService.ts
import { Quiz } from "../types/quizz";

const API_URL = 'http://localhost:8083/api/quizzes';

const quizService = {
  getQuizzes: async (): Promise<Quiz[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch quizzes');
    }
    return response.json();
  },

  getQuizById: async (id: string): Promise<Quiz> => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch quiz');
    }
    return response.json();
  },
};

export default quizService;