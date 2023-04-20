import React, { useState, useEffect } from "react";
import { Container, Avatar, Typography, Button, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import image from "../Assests/img/UPBG.png";

import axios from "axios";

const theme = createTheme();

function User() {
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("");
  const [score, setScore] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/auth/user", {
        email: localStorage.getItem("email"),
      })
      .then((response) => {
        let data = response.data.data;
        console.log();
        setName(data.firstName + " " + data.lastName);
        setEmail(data.email);
        setScore(data.score);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <Paper
          sx={{
            background: `url(${image})`,
            padding: "50px",
            width: "80%",
            margin: "auto",
          }}
        >
          <Avatar
            sx={{
              width: 200,
              height: 200,
              marginBottom: 2,
              margin: "auto",
            }}
            align="center"
            alt="User Profile Picture"
            src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_960_720.png"
          />
          <Container
            sx={{
              marginTop: "5em",
            }}
            className="space-top"
          >
            <Typography
              variant="h4"
              align="center"
              marginTop="1.5rem"
              color="white"
            >
              Name: {name}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              marginTop="1.5rem"
              color="white"
            >
              Email: {email}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              marginTop="1.5rem"
              color="white"
            >
              Points: {score}
            </Typography>
          </Container>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default User;
