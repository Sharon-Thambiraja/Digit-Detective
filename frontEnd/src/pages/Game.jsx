import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SmileGame from "./SmileGame";
import OddEvenGame from "./OddEvenGame";

import axios from "axios";

const theme = createTheme();

export default function Game() {
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(1);
  const [timer, setTimer] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

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

  useEffect(() => {
    if (gameOver === true && highScore < score) {
      axios
        .post("http://localhost:8080/api/users/score", {
          email: localStorage.getItem("email"),
          score: score,
        })
        .then((response) => {
          console.log(response);
          setHighScore(score);
        });
    }
  }, [gameOver]);

  useEffect(() => {
    console.log("testtt : ", localStorage.getItem("email"));
    axios
      .post("http://localhost:8080/api/users/get-score", {
        email: localStorage.getItem("email"),
      })
      .then((response) => {
        setHighScore(response.data.score.score);
      });
  });

  function handleGameChange() {
    setCounter((counter) => counter + 1);
    setTimer(10);
    setError(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {!gameOver && counter % 4 === 0 && (
          <SmileGame
            score={score}
            setScore={setScore}
            error={error}
            setError={setError}
            counter={counter}
            setCounter={handleGameChange}
          />
        )}

        {!gameOver && counter % 4 !== 0 && (
          <OddEvenGame
            score={score}
            setScore={setScore}
            error={error}
            setError={setError}
            counter={counter}
            setCounter={handleGameChange}
            gameOver={gameOver}
            setGameOver={setGameOver}
          />
        )}

        {gameOver && <h1>Game Over!!!</h1>}

        <h1>Score: {score}</h1>
        <h2>Time Left: {timer} seconds</h2>
        <br />
        <br />
        <h2>High Score: {highScore}</h2>
        {error && <h2>Wrong Answer!</h2>}
      </Container>
    </ThemeProvider>
  );
}
