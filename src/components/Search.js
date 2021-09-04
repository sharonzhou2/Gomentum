import React from 'react'
import { useState } from 'react';

const Search = ({onChangeCity}) => {
    const [city, setCity] = useState('');
 
    return (

        <div className="form-control search">
            <input type="text" placeholder="Auckland" onChange={(e) => setCity(e.target.value)} value={city}></input>
            <i className="fas fa-search" onClick={() => onChangeCity(city)}></i>

            
        </div>
    )
}

export default Search
