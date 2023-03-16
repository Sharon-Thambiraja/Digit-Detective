import React from 'react';
// import './Home.html';
// import default App;

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
    <div>Home</div>
    </Container>
    </ThemeProvider>
  )
}

// Get the buttons from the DOM
// const playAsGuestBtn = document.querySelector('nav ul li:first-child');
// const loginBtn = document.querySelector('nav ul li:nth-child(2)');
// const registerBtn = document.querySelector('nav ul li:nth-child(3)');

// // Add event listeners to the buttons
// playAsGuestBtn.addEventListener('click', playAsGuest);
// loginBtn.addEventListener('click', login);
// registerBtn.addEventListener('click', register);

// // Define the functions that will be executed when the buttons are clicked
// function playAsGuest() {
// 	// Add your code here
// 	console.log('Playing as guest');
// }

// function login() {
// 	// Add your code here
// 	console.log('Logging in');
// }

// function register() {
// 	// Add your code here
// 	console.log('Registering');
// }