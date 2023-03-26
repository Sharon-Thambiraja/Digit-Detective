import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SmileGame from "./SmileGame";
import OddEvenGame from "./OddEvenGame";

const theme = createTheme();

export default function Game() {
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(1);
  const [timer, setTimer] = useState(10);

  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       setTimer((timer) => timer - 1);
  //     }, 1000);
  //     return () => clearInterval(timerId);
  //   }, [counter]);

  //   useEffect(() => {
  //     if (timer === 0) {
  //       setCounter((counter) => counter + 1);
  //       setTimer(10);
  //       setError(false);
  //     }
  //   }, [timer]);

  function handleGameChange() {
    setCounter((counter) => counter + 1);
    setTimer(10);
    setError(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {counter % 4 === 0 && (
          <SmileGame
            score={score}
            setScore={setScore}
            error={error}
            setError={setError}
            counter={counter}
            setCounter={handleGameChange}
          />
        )}

        {counter % 4 !== 0 && (
          <OddEvenGame
            score={score}
            setScore={setScore}
            error={error}
            setError={setError}
            counter={counter}
            setCounter={handleGameChange}
          />
        )}

        <h1>Score: {score}</h1>
        <h2>Time Left: {timer} seconds</h2>
        {error && <h2>Wrong Answer!</h2>}
      </Container>
    </ThemeProvider>
  );
}
