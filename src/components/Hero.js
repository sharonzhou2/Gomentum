import React from 'react'
import Time from './Time'
import Quotes from './Quotes'
import NameInput from './NameInput'
const Hero = (props) => {
    return (
        <div className="Hero">
            <Time ></Time>
           
           
            {props.name === ''? <NameInput onSetName={props.onSetName}/>: <h1>Welcome {props.name}</h1>}
            <Quotes quotes={props.quotes}></Quotes>
        </div>
    )
}

export default Hero
