import React from 'react'
import Button from './Button'

const Buttons = ({onHandleClick, onSetActivity}) => {
    return (
        <div className="btn-group animate__animated animate__bounce">
            <Button text="Search" onHandleClick={onHandleClick} onSetActivity={onSetActivity} icon={"fas fa-search fa-2x"}></Button>
            <Button text="Pomodoro" onHandleClick={onHandleClick} onSetActivity={onSetActivity} icon={"fas fa-apple-alt fa-2x"}></Button>
            <Button text="To-do" onHandleClick={onHandleClick} onSetActivity={onSetActivity} icon={"fas fa-list-ul fa-2x"}></Button>
        </div>
    )
}

export default Buttons
