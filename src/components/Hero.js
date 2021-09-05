import React from 'react'
import Time from './Time'
import Quotes from './Quotes'
import NameInput from './NameInput'
import Buttons from './Buttons'
import Activity from './Activity'
import { useState } from 'react'
const Hero = (props) => {
    const [showButtons, setShowButtons] = useState(true);
    const [activity, setActivity] = useState('');

    const handleClick = () => {
        setShowButtons(false);
    }

    return (
        <div className="Hero">
            <Time country={props.weather.sys.country}></Time>
            {showButtons ? 
                <div>
                    {props.name === ''? <NameInput onSetName={props.onSetName}/>: <h1 className="animate__animated animate__fadeInUp">Welcome {props.name}</h1>}
                </div>
            : ''}         
        
                
            {showButtons ? <Buttons onHandleClick={handleClick} onSetActivity={setActivity}></Buttons> : <Activity activity={activity} onSetShowButtons={setShowButtons}></Activity>}
    
            
           
            <Quotes quotes={props.quotes}></Quotes>
        </div>
    )
}

export default Hero
