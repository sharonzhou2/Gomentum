import React from 'react'

const WeatherElement = ({label, icons, value, metric}) => {
    return (
        <div>
            <p className="weather-detail-label">{label}</p>
            <p className="weather-detail-element">{icons} {value} {metric}</p>
        </div>
    )
}

export default WeatherElement
