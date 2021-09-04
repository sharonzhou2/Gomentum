import React from 'react'

const TodoElement = ({content, finished}) => {
    return (
        <div className="todo-element">
            <p className={finished ? "crossed" : ''}>{content}</p>
           
            
        </div>
    )
}

export default TodoElement
