import React, { useState } from "react";
import bg from "../assets/bg.jpg"
import map from "../assets/map.jpg"

function Location() {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeather(latitude, longitude);
          setLocation(`latitude ${latitude} & longitude ${longitude}`);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
  };

  const getWeather = async (latitude, longitude) => {
    const key = "063675c4f0109f566af805547baa87e5";
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${key}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { country, name, state } = data[0];
      setAddress(`${name} ${country} ${state}`);
    } catch (error) {
      console.log("Fetching error is " + error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-sky-500 to-cyan-500 flex justify-center items-center sm:items-start flex-row w-full bg-cover h-[80vh] sm:h-[90vh] font-serif tracking-wider">
      <div
        style={{
          position: "relative",
          marginTop: "10%",
          fontFamily:"sans-serif",
          borderRadius: "20px",
          display: "flex",
          marginLeft: "25px",
          marginRight: "20px",
          flexWrap:"wrap",
          flexDirection: "column",
          alignItems: "center",
          width: "500px",
          height: "250px",
          border: "4px solid white",
          boxShadow: "5px 5px 5px 5px rgb(0,0,0)",
          backgroundImage: `url(${map})`,
          backgroundPosition:"center",
          backgroundSize:"cover"
        }}
      >
        <h1 className="font-bold mt-5 text-2xl">Your Co-ordinates</h1>
        <p className="text-lg font-semibold py-2">{location}</p>
        <h1 className="font-bold text-2xl">Location</h1>
        <p className="text-lg font-semibold py-2">{address}</p>
        <button
          className="absolute bottom-3 w-28 h-6 sm:h-8 rounded-xl bg-green-500 text-white border border-white font-semibold"
          onClick={getLocation}
        >
          Get Location
        </button>
      </div>
    </div>
  );
}

export default Location;
