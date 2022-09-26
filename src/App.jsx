import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCards from './components/WeatherCards'
import Loading from './components/Loading'

function App() {
  //  Estado para guardad coordenadas
  const [coords, setCoords] = useState()
  // Estado para guardar informacion del clima
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  
  useEffect(() => {
    //Funcion que se ejecuta cuando llega la informacion de ubicacion
    const success = pos => {
      const obj ={
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setCoords(obj);
    }  
    //Esto hace el llamdo a la api del navegador, para usar la ubicacion actual
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  console.log(coords)
// --------------------------------------------------------------------
  // Peticion para el clima -> se debe crear un estado y useEffect

  useEffect(() => {
    console.log(coords)
    if(coords){
    const APIKEY = 'dbba15cabe2edb156ef4d329be23a3f0'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
      .then(res => {
        const celsius = (res.data.main.temp - 273.15).toFixed(1)
        const farenheit = (celsius * 9/5 + 32).toFixed(1)
        setTemperature({celsius,farenheit}) //Ojbeto para temperture
        setWeather(res.data)})
      .catch(err => console.log(err))
    }
  },[coords])

  console.log(weather)

  return (
    <div className="App">
      {
        weather ? 
        <WeatherCards weather = {weather} temperature={temperature}/> 

        :
        <Loading />
      }
      
    </div>
  )
}

export default App
