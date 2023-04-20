import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/material/styles";
import { Container, Avatar, Typography, Button, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: theme.spacing(5),
//     paddingBottom: theme.spacing(5),
//   },
//   avatar: {
//     width: theme.spacing(12),
//     height: theme.spacing(12),
//     marginBottom: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//   },
// }));

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
            background: "#daa52085",
            padding: "20px",
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
              background: "rgb(218 165 32)",
              padding: "1.2rem",
            }}
            align="center"
            alt="User Profile Picture"
            src="https://cdn-icons-png.flaticon.com/512/16/16363.png?w=740&t=st=1681975170~exp=1681975770~hmac=eac6edb109ba01997287ab1670b0326ae8676e5854d53419ef7a1e504ac346ba"
          />
          <Container
            sx={{
              marginTop: "5em",
            }}
            className="space-top"
          >
            <Typography variant="h4" align="center" marginTop="1.5rem">
              Name: {name}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              marginTop="1.5rem"
            >
              Email: {email}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              marginTop="1.5rem"
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
