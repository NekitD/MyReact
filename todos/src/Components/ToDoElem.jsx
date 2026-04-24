import React from 'react'
import '../Styles/ToDoElem.css'

export default function ToDoElem({todo}){
    return (
        <div className='ToDo'>
            <h1 className='id'>{todo.id}</h1>
            <h1 className='name'>{todo.name}</h1>
            <h1 className='status'>{todo.status}</h1>
        </div>
    );
}