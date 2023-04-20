import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import video from "../Assests/img/BV2.mp4";
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
  const [videoSource, setVideoSource] = useState(video);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          height: "91vh",
          background: `url(${video}) no-repeat center center fixed`,
          backgroundsize: "cover",
        }}
      >
        <video
          src={video}
          muted
          loop
          autoPlay
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            minWidth: "100%",
            minHeight: "100%",
            zIndex: -1,
          }}
        />

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
      </Container>
    </ThemeProvider>
  );
}
