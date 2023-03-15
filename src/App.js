import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/pages/Layout";
import Home from "../src/pages/Home";
import Blogs from "../src/pages/Blog";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;