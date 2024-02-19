import React, { useEffect, useState } from "react";
import "./Components.css";

function Home() {
  return (
    <div
      className="bg-gradient-to-r from-blue-800 to-pink-800 flex flex-col w-max-full w-min-sm border h-auto items-center mt-16 sm:mt-auto -z-10 left-0"
    >
      <div className="sm:mt-10 w-xl h-20 xl:h-10">
        <h1 className="animate text base font-serif text-2xl lg:text-4xl mt-10 sm:mt-12 font-bold text-white hover:scale-105 transition-all duration-300">
          Welcome to API Galaxy
        </h1>
      </div>
      <div className="text-sm md:text-xl flex flex-wrap justify-around h-auto w-max-xl xl:mt-20 w-min-sm lg:pt-5 border-none leading-6 sm:leading-loose tracking-widest">
        <h2 className="scrollLeft sm:w-sm xl:w-1/3 text-white p-3 xl:p-5 sm:p-8 font-serif hover:scale-95 transition-all duration-300">
          Welcome to API Galaxy, the celestial hub where data constellations
          converge to illuminate your digital ventures! Explore the boundless
          expanse of our digital universe, where the stars of currency
          conversion, weather forecasting, linguistic mastery, and secure
          password generation shine brightly in their own cosmic corners.
        </h2>
        <div className="scrollRight w-3/4 md:w-1/3 md:h-72 md:mb-40 h-1/4 mb-20">
        <h2 className="text-2xl xl:text-4xl  mt-5 mb-4 text-white font-solid">
          FEATURES
        </h2>
        <ul className="flex flex-col sm:text-2xl text-white font-thin text-center sm:gap-5 font-serif">
          <li><a href="/Weather">Weather</a></li>
          <li><a href="/Dictionary">Dictionary</a></li>
          <li><a href="/Converter">Currency Converter</a></li>
          <li><a href="/Recipe">Recipe</a></li>
          <li><a href="/Password Generator">Password Generator</a></li>
        </ul>
      </div>
      </div>
      
    </div>
  );
}

export default Home;
