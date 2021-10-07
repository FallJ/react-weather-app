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
  if (temperature) {
      return (
        <ul className="current-forecast">
          <li className="ps-2 pe-2">Temperature: {temperature}°F</li>
          <li className="desc ps-2 pe-2">Description: {description}</li>
          <li className="ps-2 pe-2">Wind: {wind} m/h</li>
          <li className="ps-2 pe-2">Humidity: {humidity}%</li>
          <li className="ps-2">
            <img src={iconImg} />
          </li>
        </ul>
      );
      } else {
          return (
            <ul className="current-forecast">
              <li className="pe-2">Temperature: </li>
              <li className="ps-2 pe-2">Description: </li>
              <li className="ps-2 pe-2">Wind: </li>
              <li className="ps-2">Humidity: </li>
            </ul>
          );
      }
  }

  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form class="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  autoComplete="off"
                  onChange={handleSubmit}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100"
                  onClick={searchCity}
                />
              </div>
            </div>
          </form>
          <div className="overview"></div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                {displayForecast()}
              </div>
            </div>

            <div className="weather-forecast"></div>
          </div>
        </div>

        <p>
          {" "}
          <a href="https://github.com/FallJ/react-weather-app" target="_blank">
            Open-source code
          </a>
          , by Julie Fallan
        </p>
      </div>
    </div>
  );
}
