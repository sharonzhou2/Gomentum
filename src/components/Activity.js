import React, { useEffect } from 'react'
import Google from './Google'
import Todo from './Todo';


const Activity = ({activity}) => {
  
    let current;
    if (activity === "Search") {
        current = <Google></Google>;
        
    } else if (activity === "Pomodoro") {
        
    } else {
        current = <Todo></Todo>;
    
    }
    return (
        <div>

            {current}
            {<i className="fas fa-arrow-left fa-2x back-icon"> </i>}

            
        </div>
    )
}

export default Activity
