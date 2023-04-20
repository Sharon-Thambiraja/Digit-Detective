import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import image from "../Assests/img/bg1.png";

const theme = createTheme();

const baseURL = "https://marcconrad.com/uob/smile/api.php";

export default function SmileGame(props) {
  const [img, setImg] = useState(null);
  const [answer, setAnswer] = useState(null);

  const [inputAnswer, setInputAnswer] = useState("");

  const fetchQuestion = () => {
    axios.get(baseURL).then((response) => {
      setInputAnswer("");
      setImg(response.data.question);
      setAnswer(response.data.solution);
      props.setError(false);
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(inputAnswer);
    console.log(answer);
    if (inputAnswer == answer) {
      props.setScore((prev) => prev + 20);
      fetchQuestion();
      props.setCounter((prev) => prev + 1);
    } else {
      props.setError(true);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xxl">
        <Paper
          elevation={20}
          sx={{
            p: 4,
            backgroundImage: `url(${image})`,
            backgroundsize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "23%",
            width: "25%",
          }}
        >
          <CssBaseline />

          <center>
            <img src={img} width="300" />
          </center>
          <form onSubmit={submitForm}>
            <Stack spacing={7} direction="row">
              <TextField
                label="Enter answer"
                type="number"
                variant="outlined"
                value={inputAnswer}
                onChange={(e) => {
                  setInputAnswer(e.target.value);
                }}
                sx={{
                  bgcolor: "white",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "Primary",
                  "&:hover": { bgcolor: "Secondary" },
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
