import React from 'react'
import WeatherMain from './WeatherMain'
import WeatherDetails from './WeatherDetails'

const Weather = ({weather, onChangeCity}) => {
    console.log(weather)
    return (
        <div className="weather">
            
            <WeatherMain main={weather.main} location={weather.name} weather={weather.weather} sys={weather.sys} onChangeCity={onChangeCity}></WeatherMain>
            <WeatherDetails main={weather.main}></WeatherDetails>

        </div>
    )
}

export default Weather
