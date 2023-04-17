import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import image from "../Assests/img/bg1.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Digit Detective
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="l">
        <Paper
          elevation={5}
          sx={{
            p: 4,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "665px",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            fontFamily="Freestyle Script"
            fontWeight="bold"
            color="DarkBrown"
            textAlign="right"
          >
            Welcome to Digit Detective
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            fontFamily="sans-serif"
            fontWeight="bold"
            fontSize={18}
            textAlign="right"
          >
            Explore a world of Mathematical adventure and excitement.
          </Typography>
          <Stack
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={4}
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              color="primary"
              href="/Game"
              sx={{ width: "15%", mb: 1 }}
            >
              Play As Guest
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="/Login"
              sx={{ width: "15%", mb: 3 }}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="/Signup"
              sx={{ width: "15%", mb: 3 }}
            >
              Sign Up
            </Button>
          </Stack>
          <Copyright sx={{ mt: 30 }} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
