import React, { useState, useEffect, useRef, getDay } from "react";
import FetchDay from "./FetchDay";
import { Container } from "postcss";

const Weather = () => {
  const [zipCode, setZipCode] = useState();
  //const [submittedZipCode, setSubmittedZipCode] = useState(false);
  const [geoData, setGeoData] = useState();
  const [weatherData, setWeatherData] = useState({});

  let lat = "";
  let lon = "";
  const apiKey = "054bf18090624c8a77765b7369a943c3";

  const apiUrl1 = `https://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`;

  const zipCodeRef = useRef();

  useEffect(() => {
    console.log("Entering zip Code effect");
    console.log("Zip code: " + zipCode);
    if (zipCode) {
      console.log("Zip Code Succesful");
      console.log("URL: " + apiUrl1);

      //fetch1
      const fetchGeoAsync = async () => {
        const response = await fetch(apiUrl1);
        const data = await response.json();
        setGeoData(data);
      };

      fetchGeoAsync().catch(console.error);
    }
  }, [zipCode]);

  useEffect(() => {
    console.log("entering geoData effect");
    if (geoData) {
      console.log("Passed if GeoData");
      lat = geoData.lat;
      lon = geoData.lon;
      const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&mode=json&appid=${apiKey}`;
      const fetchWeatherAsync = async () => {
        try {
          const response = await fetch(apiUrl2);
          const data = await response.json();
          setWeatherData(data);
        } catch {
          console.error(error + "Caught at 1");
        }
      };

      fetchWeatherAsync().catch(console.error + "caught at 2");
    }
  }, [geoData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const zipValue = zipCodeRef.current.value;
    setZipCode(zipValue);
    //setSubmittedZipCode(true);
  };

  return (
    <>
      <div className="bg-black text-white rounded-3xl flex flex-col min-h-64 transition-all duration-1000">
        <div className="bg-black text-white rounded-3xl m-5">
          This is a small daily weather app I created using React Async/Await
          fetch calls to a weather API. <br />
          <a className=" text-blue-500" href="https://openweathermap.org/">
            Source: OpenWeather
          </a>
        </div>
        <FetchDay weatherData={weatherData} />
        <form className="mt-5 pb-4" onSubmit={handleSubmit}>
          <label htmlFor="zip" className="m-2">
            ZipCode:
          </label>
          <input
            type="text"
            id="zip"
            className="text-black p-1 rounded will-change-auto"
            ref={zipCodeRef}
          />
          <button className="bg-gray-800" type="submit">
            Forecast
          </button>
        </form>
      </div>
    </>
  );
};

export default Weather;
