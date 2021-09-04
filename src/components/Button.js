import React from 'react'

const Button = ({text, onHandleClick, onSetActivity}) => {
    const handleButton = () => {
        console.log(text);
        onHandleClick();
        onSetActivity(text);
    }
    return (
        <div className="btn">
            <button onClick={handleButton}>{text}</button>
 
        </div>
    )
}

export default Button
