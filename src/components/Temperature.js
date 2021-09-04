import React from 'react'

const Temperature = ({weather}) => {
    const roundNumber = (number) => {
        let res = Math.round(number * 10) / 10
        return res
    }
    return (
        <div className="temperature">
            
            <h1>{roundNumber(weather.temp)} ° C</h1>
         
        </div>
    )
}

export default Temperature
