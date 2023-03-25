import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function OddEvenGame(props) {
  const [question, setQuestion] = useState(1);
  const [answer, setAnswer] = useState("Odd");

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
      <Container component="main" maxWidth="xs">
        <ToastContainer />
        <CssBaseline />
        <h1> Number : {question}</h1>

        <Stack spacing={7} direction="row">
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
      </Container>
    </ThemeProvider>
  );
}
