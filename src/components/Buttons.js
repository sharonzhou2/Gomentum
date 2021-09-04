import React from 'react'
import Button from './Button'

const Buttons = ({onHandleClick, onSetActivity}) => {
    return (
        <div className="btn-group animate__animated animate__bounce">
            <Button text="Search" onHandleClick={onHandleClick} onSetActivity={onSetActivity}></Button>
            <Button text="Pomodoro" onHandleClick={onHandleClick} onSetActivity={onSetActivity}></Button>
            <Button text="To-do" onHandleClick={onHandleClick} onSetActivity={onSetActivity}></Button>
        </div>
    )
}

export default Buttons
