import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Github } from "./components/Pages/github";
import { About } from "./components/Pages/About";
import { Login } from "./components/Pages/Login";
import { SpeedInsights } from "@vercel/speed-insights/react"

import React, { useEffect } from 'react';

function Title() {
  useEffect(() => {
    document.title = 'React NavBar | Abhishek Rajput';    // Page title here !
  }, []);
}

function App() {
  return (
    <>
    <Title></Title>
    <SpeedInsights></SpeedInsights>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/github" element={<Github />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
