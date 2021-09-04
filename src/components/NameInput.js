import React from 'react'


const NameInput = (props) => {


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            
            props.onSetName(e.target.value)
            localStorage.setItem('name', e.target.value)
        }
    }

    return (
        <div className="name-input">
            <h1>Welcome</h1>
            <input type="text" onKeyDown={handleKeyDown}></input>
            {/* <input type="submit" ></input> */}
        </div>
    )
}

export default NameInput
