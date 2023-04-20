import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/pages/Layout";
import Home from "../src/pages/Home.jsx";
import Login from "./pages/Login";
import Signup from "../src/pages/Signup";
import Game from './pages/Game';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="Game" element={<Game />} />
            <Route path="User" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
// test

export default App;