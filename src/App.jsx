import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ChooseUs from "./components/ChooseUs";
import HowItWorks from "./components/HowItWorks";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Import Signup Page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout with Navbar and Footer */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Categories />
              <ChooseUs />
              <HowItWorks />
              <Footer />
            </>
          }
        />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
