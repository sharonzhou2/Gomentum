import React from 'react'

const TemperatureInfo = ({weather}) => {
    const displayIcon = (weather) => {
        // console.log(weather.weather[0].main)
        const currentWeather = weather.weather[0].main;
        if (currentWeather === "Rain") {
            return <i className="fas fa-cloud-showers-heavy fa-3x"></i>
        } else if (currentWeather === "Clear") {
            return <i className="fas fa-sun fa-3x"></i>
        
        } else if (currentWeather === "Snow") {
            return <i className="fas fa-snowflake fa-3x"></i>
        
        } else if (currentWeather === "Thunderstorm") {
            return <i className="fas fa-bolt fa-3x"></i>
        
        } else if (currentWeather === "Clouds") {
            return <i className="fas fa-cloud fa-3x"></i>
        
        }  else if (currentWeather === "Drizzle") {
            return <i className="fas fa-cloud-rain fa-3x"></i>
        
        }  else if (currentWeather === "Atmosphere") {
            return <i className="fas fa-smog fa-3x"></i>
        } else {
            return <i className="fas fa-sun fa-3x"></i>

        }
    }
    return (
        <div>
            
            <h1>{weather[0].description}</h1>
            <div className="temp-icon">
             {displayIcon({weather})}
       

            </div>
        </div>
    )
}

export default TemperatureInfo
