import React, { useState } from "react";
import "isomorphic-fetch";
import WeatherCondition from "./WeatherCondition";
// The keys object contains the API keys
const { keys } = require("./config");

const Forecast = (props) => {
  let [responseObj, setResponseObj] = useState({});

  function getForecast(e) {
    e.preventDefault();
    Next, make the call to the openweathermap API, with the parameters for the specified city
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${city}&appid=${keys.openweathermap_API_KEY}`
    )
   // fetch(
   //   "http://api.openweathermap.org/data/2.5/weather?units=metric&q=durban&appid=d6e0e85a41968aaf6240b5ed27522ebd"
   // )

      .then((response) => response.json())
      .then(
        (response) => {
          setResponseObj(response);
        },
        (error) => {
          alert("Error in fetching weather data : " + error.message);
        }
      );
  }

  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("metric");

  return (
    // The following JSX code block renders the form that captures the user input
    <div>
      <h2>Current Weather Conditions</h2>
      <div>
        <WeatherCondition responseObj={responseObj} unit={unit} />
      </div>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <button type="submit">Get Forecast</button>
      </form>
    </div>
  );
};

export default Forecast;
