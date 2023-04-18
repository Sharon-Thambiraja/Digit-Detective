import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import image from "../Assests/img/OEBG.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function OddEvenGame(props) {
  const [question, setQuestion] = useState(1);
  const [answer, setAnswer] = useState("Odd");
  const [timeLeft, setTimeLeft] = useState(10);

  const generateNumber = () => {
    let x = Math.floor(Math.random() * 100 + 1);
    let answer = "Odd";
    if (x % 2 == 0) {
      answer = "Even";
    }
    setQuestion(x);
    setAnswer(answer);
  };

  useEffect(() => {
    generateNumber();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft === 0) {
      console.log("Tessssttttt");
      clearInterval(intervalId);
      props.setGameOver(true);
      // setTimeLeft(10);
      // props.setCounter((prev) => prev + 1);
      // generateNumber();
    }

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const submitAnswer = (userAnswer) => {
    console.log(userAnswer);
    if (userAnswer == answer) {
      props.setScore((prev) => prev + 10);
    } else {
      toast.error("Wrong Answer!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    props.setCounter((prev) => prev + 1);
    generateNumber();
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Container component="main" maxWidth="xs"> */}
      <Container component="main" maxWidth="xxl">
        <Paper
          elevation={5}
          sx={{
            p: 4,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <ToastContainer />
          <CssBaseline />
          <h1 style={{ color: "white" }}>Number: {question}</h1>

          <Stack spacing={3} direction="row">
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                submitAnswer("Odd");
              }}
              sx={{
                background: "GoldenRod",
                "&:hover": { bgcolor: "DarkGoldenRod" },
              }}
            >
              Odd
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                submitAnswer("Even");
              }}
              sx={{
                background: "GoldenRod",
                "&:hover": { bgcolor: "DarkGoldenRod" },
              }}
            >
              Even
            </Button>
          </Stack>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
