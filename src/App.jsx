import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage/homePage";
import CoursePage from "./Pages/coursePage/coursePage";
import PortfolioPage from "./Pages/portfolioPage/portfolioPage";
import SignUpPage from "./Pages/signUpPage/signUp";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";

import "./index.css";

function App() {
  return (
    <>
    <Navbar/>
      <div className="container">
        <BrowserRouter>
          <Routes>  
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      <Footer/>
      </div>
    </>
  );
}

export default App;
