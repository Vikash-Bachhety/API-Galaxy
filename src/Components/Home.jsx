import React from "react";
import Links from "./Links";
import "./Components.css";

function Home() {
  return (
    <div className="bg-gradient-to-r from-green-800 to-sky-800 flex flex-col w-max-full w-min-sm border h-auto items-center mt-16 sm:mt-auto -z-10 left-0">
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
        <div className="w-3/4 md:w-1/3 md:h-72 md:mb-40 h-1/4 mb-20">
          <h2 className="animate text-2xl xl:text-4xl sm:mt-5 mb-2 sm:mb-4 font-serif text-white font-solid">
            FEATURES
          </h2>
          <div className="scrollRight flex flex-col text-sm sm:text-2xl text-white font-thin gap-y-2 text-center font-serif">
            <Links to="Weather" text="Weather" />
            <Links to="Dictionary" text="Dictionary" />
            <Links to="Currency" text="Currency" />
            <Links to="Recipe" text="Recipe" />
            <Links to="Location" text="Location" />
            <Links to="Password" text="Password Generator" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
