import React from 'react'

const Button = ({text, onHandleClick, onSetActivity, icon}) => {
    // const [mouseEvent, setMouseEvent] = useState({
    //     "Search": false,
    //     "Pomodoro": false,
    //     "To-do": false,

    // })
    const handleButton = () => {
        onHandleClick();
        onSetActivity(text);
    }
    // const mouseOverEvent = () => {

    // }
    return (
        <div className="icon-btn">
            {/* <button className="btn" onClick={handleButton}>{text}</button> */}
            <i className={icon} onClick={handleButton} ></i>
 
        </div>
    )
}

export default Button
