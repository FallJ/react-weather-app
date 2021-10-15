import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </div>
  );
}
