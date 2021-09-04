import React from 'react'
import { useState } from 'react';

const Search = ({onChangeCity}) => {
    const [city, setCity] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            console.log("hi");
            setCity(e.target.value);
            onChangeCity(city)
            setCity('');
        }
    }

 
    return (

        <div className="form-control search">
            <input type="text" placeholder="Auckland" onChange={(e) => setCity(e.target.value)} value={city} onKeyDown={handleKeyDown}></input>
            <i className="fas fa-search" onClick={() => onChangeCity(city)}></i>

            
        </div>
    )
}

export default Search
