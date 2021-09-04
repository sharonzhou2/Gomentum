import React from 'react'


const Time = () => {
    const getTime = () => {
        let time = new Date().toLocaleTimeString('en-US', { hour12: false, 
            hour: "numeric", 
            minute: "numeric"});
        return time;
    }

    const getDate= () => {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let date = new Date().toLocaleDateString('en-AU', options);
        return date
    }
  
    return (
     
        <div className="Time">
            <h1>{getTime()}</h1>
            <p>{getDate()}</p>
        </div>
    )
}

export default Time
