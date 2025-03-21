import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-400 to-gray-700">
      {/* Logo */}
      <img
        src="https://via.placeholder.com/100"
        alt="Logo"
        className="w-24 h-24 mb-4"
      />

      {/* Heading */}
      <h1 className="text-white text-5xl font-bold leading-tight sm:text-6xl">
        ONLINE DIGITAL RENTALS <br className="hidden sm:block" /> FOR STUDENTS
      </h1>

      {/* Subtitle */}
      <p className="text-white text-lg mt-4 max-w-2xl sm:text-xl">
        Affordable and flexible digital rentals for students. Get the tech you need, hassle-free!
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        {/* Sign Up Button (No Navigation Yet) */}
        <button className="px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          Sign Up
        </button>

        {/* Explore Rentals Button */}
        <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-800 transition duration-300">
          Explore Rentals
        </button>
      </div>
    </div>
  );
};

export default Hero;
