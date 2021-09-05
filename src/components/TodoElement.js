import React from 'react'



const TodoElement = ({content, finished, onDelete, todo, toggleFinised, deleteActive}) => {

    return (
        // animate__animated animate__bounce
        <div className={`todo-element`} >
            <p className={finished ? "crossed" : ''} onClick={() => toggleFinised(todo.id, finished)} >{content} </p>
            <i className="fas fa-trash fa-md trash" onClick={() => onDelete(todo.id)}></i>
            
            
        </div>
    )
}

export default TodoElement
