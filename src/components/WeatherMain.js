import React from 'react'
import Temperature from './Temperature'
import TemperatureInfo from './TemperatureInfo'
import Search from './Search'

const WeatherMain = ({main, location, weather, sys, onChangeCity}) => {
    console.log(location)
    
    return (
        <div className="weather-main">
            <p>{location}, {sys.country}</p>
            <Search onChangeCity={onChangeCity}></Search>
            <Temperature weather={main}></Temperature>
            <TemperatureInfo weather={weather}></TemperatureInfo>

        </div>
    )
}

export default WeatherMain
