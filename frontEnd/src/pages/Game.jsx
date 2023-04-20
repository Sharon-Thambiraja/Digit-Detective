import React, { useState, useEffect } from "react";
import image1 from "../Assests/img/BG2.png";
import image2 from "../Assests/img/BG3.png";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
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
  const [token, setToken] = useState(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((timer) => {
        if (timer === 0) {
          clearInterval(timerId);
          setCounter((counter) => counter + 1);
          setTimer(10);
          setGameOver(true); // move gameOver state update here
          return 0;
        } else {
          return timer - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [counter, gameOver]); // add gameOver as a dependency

  useEffect(() => {
    if (gameOver === true && highScore < score) {
      console.log("updating high score" + score);
      if (token) {
        axios
          .post("http://localhost:8080/api/users/score", {
            email: localStorage.getItem("email"),
            score: score,
          })
          .then((response) => {
            setHighScore(score);
          });
      } else {
        setHighScore(score);
      }
    }
  }, [gameOver]);

  useEffect(() => {
    console.log("testtt : ", localStorage.getItem("email"));
    if (token) {
      axios
        .post("http://localhost:8080/api/users/get-score", {
          email: localStorage.getItem("email"),
        })
        .then((response) => {
          setHighScore(response.data.score.score);
        });
    } else {
      setHighScore(0);
    }
  });

  useEffect(() => {
    let storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  function handleGameChange() {
    setCounter((counter) => counter + 1);
    setTimer(10);
    setError(false);
    setGameOver(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xxl"
        backgroundsize="cover"
        sx={{
          height: "91vh",
          background: `url(${image1}) no-repeat center center fixed`,
          backgroundsize: "cover",
        }}
      >
        <CssBaseline />
        <br />
        <center>
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
              timer={timer}
            />
          )}
        </center>
        <br />

        <br />
        <br />
        <br />
        <center>
          <Paper
            elevation={5}
            sx={{
              p: 4,
              backgroundImage: `url(${image2})`,
              backgroundsize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "30%",
              width: "25%",
              color: "white",
            }}
          >
            <div>
              <center>
                <h1>Score: {score}</h1>
                <h2>Time Left: {timer} seconds</h2>
                <h2>High Score: {highScore}</h2>
                {error && <h2>Wrong Answer!</h2>}
              </center>
            </div>
          </Paper>
        </center>
        <br />
        <br />
        <br />
        {gameOver && (
          <div>
            <h1 style={{ color: "white", textAlign: "center" }}>
              You ran out of time! Game Over!!!
            </h1>
            <br />
            <center>
              <Button
                variant="contained"
                onClick={() => window.location.reload()}
                sx={{
                  backgroundColor: "Primary",
                  "&:hover": { backgroundColor: "Secondary" },
                }}
              >
                Replay?
              </Button>
            </center>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
}
