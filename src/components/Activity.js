import React, { useEffect } from 'react'
import Google from './Google'
import Todo from './Todo';
import Pomodoro from './Pomodoro';


const Activity = ({activity, onSetShowButtons}) => {
  
    let current;
    if (activity === "Search") {
        current = <Google></Google>;
        
    } else if (activity === "Pomodoro") {
        current = <Pomodoro></Pomodoro>
    } else {
        current = <Todo></Todo>;
    
    }
    return (
        <div>

            {current}
            {<i className="fas fa-arrow-left fa-2x back-icon" onClick={() => onSetShowButtons(true)}> </i>}

            
        </div>
    )
}

export default Activity
