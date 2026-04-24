import React, { useState } from 'react'
import ToDo from './ToDoElem'
import '../Styles/ToDoList.css'
import AddForm from './AddTool'

export default function ToDoList({name, list}){
    const [todos, setTodos] = useState(list);

    function addTodo(todo){
        todo = todos.length;
        setTodos([...todos, todo]);
    }
    return (
        <div className='ToDoList'>
            <AddForm addCallback={addTodo}/>
            <h1 className='ListName'>{name}</h1>
            {todos.map((elem)=>{
                return <ToDo key={elem.id} todo={elem}/>
            })}
        </div>
    );
}