import React from 'react'
import WeatherElement from './WeatherElement'


const WeatherDetails = ({main, wind}) => {
    // console.log(main)
    return (
        <div className="weather-details">
            <WeatherElement label="Feels Like" icons={<i className="fas fa-feather-alt"></i>} value={main.feels_like} metric={"°C"}></WeatherElement>
            <WeatherElement label="Humidity" icons={<i className="fas fa-tint"></i>} value={main.humidity} metric={"%"}></WeatherElement>
            <WeatherElement label="Minimum Temperature" icons={<i className="fas fa-temperature-low"></i>} value={main.temp_min} metric={"°C"}></WeatherElement>
            <WeatherElement label="Maximum Temperature" icons={<i className="fas fa-temperature-high"></i>} value={main.temp_max} metric={"°C"}></WeatherElement>

        </div>
    )
}

export default WeatherDetails
