import React, { useEffect } from 'react'
import { useState } from 'react'

const Time = ({country}) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString(`en-AU`, { hour12: false, 
        hour: "numeric", 
        minute: "numeric"}))

    const getDate= () => {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let date = new Date().toLocaleDateString(`en-AU`, options);
        return date
    }

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date().toLocaleTimeString(`en-AU`, { hour12: false, 
            hour: "numeric", 
            minute: "numeric"})), 1000 * 60);
        return () => {
            clearInterval(interval);
        }
    }, [])

    // .toLocaleTimeString(`en-AU`, { hour12: false, 
    // hour: "numeric", 
    // minute: "numeric"})
  
    return (
     
        <div className="Time">
            <h1>{time}</h1>
            <p>{getDate()}</p>
        </div>
    )
}

export default Time
