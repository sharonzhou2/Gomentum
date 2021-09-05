import React from 'react'
import { useState, useEffect } from 'react'
import TodoElement from './TodoElement'
import TodoAdd from './TodoAdd'

const Todo = () => {
    const [todos, setTodos] =  useState(
        [
            {
                id: 1,
                content: "Finish my homework",
                finished: true
            }, 
            {
                id: 2,
                content: "Go pick up my brother",
                finished: false
            }
        ]
    )

    const [showTodos, setShowTodos] = useState(false);
    const [deleteActive, setDeleteActive] = useState(false);

    const getLocalStorage = () => {
        let storage = JSON.parse(window.localStorage.getItem('todos'))
        if (storage === '' || storage === null) {

        } else {
            setTodos(storage);
        }
        
    }


    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        setDeleteActive(true);
        window.localStorage.setItem('todos', JSON.stringify(todos));
        return id;

    }

    const toggleFinised = (id, finish) => {
        setTodos(todos.map((todo) => 
            todo.id === id ? {...todo, finished: !finish} : todo
        ));
        window.localStorage.setItem('todos', JSON.stringify(todos));

    }

    useEffect(()=>{
        // localStorage.clear();
        getLocalStorage();
    }, []) // <-- empty dependency array



    return (
        <div>
            <div className="todos">
                {todos.length > 0 ?  
                    <div>
                        {todos.slice(0).reverse().map((todo) => <TodoElement key={todo.id} 
                        content={todo.content} finished={todo.finished} onDelete={onDelete} 
                        todo={todo} toggleFinised={toggleFinised} deleteActive={deleteActive}></TodoElement>)} 
                    </div>
                    : <h3>No Todos to Show</h3>}
               
            
            
            </div>
             {showTodos ?  
                <button className="btn" onClick={() => setShowTodos(true)}>Get Productive!</button> 
                : <TodoAdd todos={todos} setTodos={setTodos}></TodoAdd>}
             
        </div>

    )
}

export default Todo
