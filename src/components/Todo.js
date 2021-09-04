import React from 'react'
import { useState } from 'react'
import TodoElement from './TodoElement'

const Todo = () => {
    const [todos, setTodos] =  useState({
        tasks: [
            {
                id: 1,
                content: "Finish my homework",
                finished: true
            },  
            
            {
                id: 2,
                content: "Go pick up my brother",
                finished: false
            } ,  
            
            {
                id: 3,
                content: "Go cry",
                finished: true
            }
            ,  
            
            {
                id: 3,
                content: "Go cry",
                finished: true
            }
            ,  
            
            {
                id: 3,
                content: "Go cry",
                finished: true
            }
        ]
    })
    return (
        <div className="todos">
            {todos.tasks.map((todo) => <TodoElement content={todo.content} finished={todo.finished}></TodoElement>)}
            
        </div>
    )
}

export default Todo
