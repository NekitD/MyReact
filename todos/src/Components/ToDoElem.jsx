import React from 'react'

export default function ToDoElem({todo}){
    return (
        <div className='ToDo'>
            <h1>{todo.id}</h1>
            <h1>{todo.name}</h1>
            <h1>{todo.status}</h1>
        </div>
    );
}