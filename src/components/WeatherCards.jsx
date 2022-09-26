import React, { useState } from "react";

const WeatherCards = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeTemperature = () => setIsCelsius(!isCelsius); // Niega isCelsius, solo cambia de Verdadero a Falso
  // Se hace solo para renderizar una sola temperatura

  console.log(weather);
  return (
    <article className="card">
      <h1 className="card-title">WEATHER APP</h1>
      <h2 className="card-subtitle">
        <span></span>
        {` ${weather?.name}, ${weather?.sys.country}`}
      </h2>
      <section className="card-first-section">
        <img
          className="card-icon"
          src={
            weather
              ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
              : ""
          }
          alt="Imagen-estadoClima"
        />
      </section>
      <section className="card-second-section">
        <h3 className="second-title">"{weather?.weather[0].description}"</h3>
        <ul className="second-list">
          <li className="second-item">
            <span className="second-span">Wind Speed</span> {weather?.wind.speed} m/s
          </li>
          <li className="second-item">
            <span className="second-span">Clouds</span> {weather?.clouds.all}%
          </li>
          <li className="second-item">
            <span className="second-span">Pressure</span> {weather?.main.pressure}hPa{" "}
          </li>
        </ul>
      </section>
      <h2 className="card-temperature">
        {isCelsius
          ? `${temperature?.celsius} °C`
          : `${temperature?.farenheit} °F`}
      </h2>
      <button className="card-btn"onClick={changeTemperature}>
        {isCelsius ? "Change to °Faranheit" : "Change to °Celsius"}
      </button>
    </article>
  );
};

export default WeatherCards;
