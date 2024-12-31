import React, { useEffect, useState } from "react";
import sunny from "../assets/weatherIcons/sunny.png";

const baseIconURL = "https://openweathermap.org/img/wn/";

const Day = ({ weatherData }) => {
  const [weatherIconUrl, setWeatherIconUrl] = useState();
  useEffect(() => {
    if (weatherData) {
      let iconURL = baseIconURL + weatherData.weather[0].icon + "@2x.png";
      console.log("ICON ID: " + weatherData.weather.icon);
      console.log("ICON URL : " + iconURL);
      setWeatherIconUrl(iconURL);
    }
  }, [weatherData]);

  return (
    <>
      <div className=" text-white h-auto w-auto bg-sky-300 mx-40 rounded-3xl flex justify-center">
        <img
          className="bg-sky-400 rounded-3xl object-fill"
          src={weatherIconUrl}
          alt="image"
          style={{}}
        />
      </div>
      <div className="flex justify-center text-justify mx-40 bg-sky-600 rounded-3xl">
        <div className="mb-6">
          <h1>{weatherData.name}</h1>
          <p>Weather: {weatherData.weather[0].main}&deg;</p>
          <p>Current Temp: {weatherData.main.temp.toFixed(0)}&deg;</p>
          <p>Feels like: {weatherData.main.feels_like.toFixed(0)}&deg;</p>
          <p>Max Temp: {weatherData.main.temp_max.toFixed(0)}&deg;</p>
          <p>Min Temp: {weatherData.main.temp_min.toFixed(0)}&deg;</p>
          <p>Humidity: {weatherData.main.humidity.toFixed(0)}%</p>
        </div>
      </div>
    </>
  );
};

export default Day;
