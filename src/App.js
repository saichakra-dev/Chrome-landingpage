import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FastOption from "./components/FastOption";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fast" element={<FastOption />} />
      </Routes>
    </Router>
  );
};

export default App;
