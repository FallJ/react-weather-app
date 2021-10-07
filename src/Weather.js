import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

import "./Weather.css";

export default function Weather() {
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  let iconImg = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  function searchCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=a906446d03e88c127f9d85a4e9cd44be`;
    axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    setCity(event.target.value);
  }

  function displayForecast() {
  
      return (
        <ul>
          <li>Temperature: {temperature}°F</li>
          <li className="desc">Description: {description}</li>
          <li>Wind: {wind} m/h</li>
          <li>Humidity: {humidity}%</li>
          <li>
            <img src={iconImg} />
          </li>
        </ul>
      );
    
  }

  return (
    <div className="weatherReturn">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <h2>Weather App</h2>
          <form className="weatherForm">
              <div className="row">
                  <div className="col-9">
            <input
              type="text"
              placeholder="enter city"
              onChange={handleSubmit}
              required
            />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="w-50" onClick={searchCity} />
          </div>
          </div>
          </form>
          {displayForecast()}
        </div>
      </div>
    </div>
  );
}
