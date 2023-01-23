import './App.css'
import React, { useState } from 'react'



function App() {
  const apikey = '33978ed73a92828fe2ec0adee2847157';
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event)=>{
    
    if (event.key==="Enter") {
      fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apikey}`)
      .then(response=>response.json())
      .then(data=>{
        setWeatherData(data)
        setCity("")
      })

    }
  }

  return (
    <div className='container'>
        <input type="text" name="" 
        className='input'
        onChange={e=>setCity(e.target.value)}
        value={city}
        onKeyDown={getWeather}
        placeholder='Enter City' id="" />

        {typeof weatherData.main === 'undefined'? (
          <div> <p>Welcome To Our Weather App. Enter In A City To Get The Current Weather Of That City </p> </div>
        ):(
          <div className='weather-data'>
            <p className='city'> {weatherData.name} </p>
            <p className='temp'>{weatherData.main.temp} °F</p>
            <p className='weather'> {weatherData.weather[0].main} </p>

          </div>
        ) }

        { weatherData.cod === "404" ? 
           <p> city not found</p> : <></>
         }
    </div>
  )
}

export default App