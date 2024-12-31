import React from "react";
import Day from "./Day.jsx";

const Forecast = ({ weatherData, iconUrl }) => {
  let toRenderDay;

  if (weatherData.name) {
    toRenderDay = <Day weatherData={weatherData} />;
  } else {
    toRenderDay = <h1>Please enter zip code to get daily forecast</h1>;
  }

  return (
    <>
      <div className="bg-black rounded-3xl ">
        <div className="px-12">{toRenderDay}</div>
      </div>
    </>
  );
};

export default Forecast;
