// types/quizz.ts

export interface Quiz {
  _id: string;
  title: string;
  description: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
    _id: string;
  }[];
  createdAt: string;
  createdBy: {
    username: string;
    email: string;
    profileImage: string;
  };
}
