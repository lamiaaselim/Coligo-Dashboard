// components/QuizDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { Quiz } from "../types/quizz.ts";
import quizService from "../services/quizService.ts";
import {
  Container,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

const QuizDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Hook for navigation
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(-1); // Start with -1 to show the "Start Quiz" button
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await quizService.getQuizById(id!);
        setQuiz(data);
        setSelectedAnswers(new Array(data.questions.length).fill(-1));
      } catch (err) {
        setError("Failed to fetch quiz details");
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [id]);

  // Start the quiz
  const handleStartQuiz = () => {
    setActiveStep(0); // Move to the first question
  };

  // Go to the next question
  const handleNext = () => {
    if (activeStep === quiz!.questions.length - 1) {
      setIsFinished(true); // Finish the quiz
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  // Go to the previous question
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Handle answer selection
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[activeStep] = parseInt(event.target.value, 10);
    setSelectedAnswers(newAnswers);
  };

  const handleBackDash =() => {
    navigate("/dashboard"); // Navigate to the dashboard
  }

  // Go back to the previous page
  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error}</Typography>;
  if (!quiz) return <Typography>Quiz not found</Typography>;

  return (
    <Container maxWidth="md" className="py-5">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          {quiz.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {quiz.description}
        </Typography>

        {/* Stepper for questions */}
        <Box mt={4}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {quiz.questions.map((question, index) => (
              <Step key={index}>
                <StepLabel>Question {index + 1}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Show "Start Quiz" button if the quiz hasn't started */}
        {activeStep === -1 && (
          <Box mt={4} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={handleStartQuiz}>
              Start Quiz
            </Button>
          </Box>
        )}

        {/* Show the current question or the finish message */}
        {isFinished ? (
          <Box mt={4}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h5" align="center" gutterBottom>
                Thank you, you finished the quiz!
              </Typography>
              <Button
              variant="contained"
              onClick={handleBackDash}
            >
              Back to Dashboard
            </Button>
            </Paper>
          </Box>
        ) : activeStep !== -1 ? (
          <Box mt={4}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                {quiz.questions[activeStep].question}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={selectedAnswers[activeStep]}
                  onChange={handleAnswerChange}
                >
                  {quiz.questions[activeStep].options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={index}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Paper>
          </Box>
        ) : null}

        {/* Navigation buttons */}
        {activeStep !== -1 && !isFinished && (
          <Box mt={4} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === quiz.questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        )}

        {/* Back button to return to the previous page */}
        {!isFinished && activeStep === -1 && (
          <Box mt={4} display="flex" justifyContent="center">
            <Button variant="outlined" onClick={handleGoBack}>
              Back to Quizzes
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default QuizDetails;