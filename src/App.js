import React, { useState, useEffect } from "react";
import "./App.css";

// const API_KEY = "";
const App = () => {
  const getCitiesForCountry = (country) => {
    switch (country) {
      case "USA":
        return ["New York", "Los Angeles", "Chicago"];
      case "Canada":
        return ["Toronto", "Montreal", "Vancouver"];
      case "UK":
        return ["London", "Manchester", "Birmingham"];
      case "Pakistan":
        return ["Islamabad", "Lahore", "Karachi"];
      default:
        return [];
    }
  };
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},${selectedCountry}&appid=6deb6b1e29e6ff3c1ec004d917cb0edf`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  useEffect(() => {
    if (selectedCity) {
      fetchWeatherData();
    }
  }, [selectedCity]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  console.log(weatherData);

  const buttonClickHandler = () => {
    setSelectedCity("");
    setSelectedCountry("");
    setWeatherData("");
  };

  // const Temperature = "";
  const temperature = weatherData ? weatherData.main.temp - 273.15 : "";

  const limitTemperature = temperature ? temperature.toFixed(2) : "";

  return (
    <div className="layout">
      <div className="card">
        <h1>Weather App</h1>
        <div className="content">
          <div className="select">
            <label htmlFor="country-select">Select a country:</label>
            <select id="country-select" value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Select a country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>
          {selectedCountry && (
            <div className="select">
              <label htmlFor="city-select">Select a city:</label>
              <select id="city-select" value={selectedCity} onChange={handleCityChange}>
                <option value="">Select a city</option>
                {getCitiesForCountry(selectedCountry).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        {weatherData && (
          <div className="weather">
            <h2>Weather in {selectedCity}</h2>
            <p>Temperature: {limitTemperature} C</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              alt="Image"
            />
            {/* {weatherData && weatherData.weather && weatherData.weather[0] && (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="Image"
            />
          )} */}
            <button onClick={buttonClickHandler}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
