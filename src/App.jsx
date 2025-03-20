import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ChooseUs from "./components/ChooseUs";
import HowItWorks from "./components/HowItWorks";
// import { FaCalendarAlt, FaUserMd } from "react-icons/fa";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories/>
      <ChooseUs/>
      <HowItWorks/>
      <Footer/>
    </>
  );
};

export default App;
