import React from 'react'
import '../Styles/ToDoElem.css'

export default function ToDoElem({todo, selCall, selected}){
    let style;
    if(selected === todo){
        style = {backgroundColor: "rgb(255, 104, 104)"};
    }else{
        style = {backgroundColor: "rgb(178, 157, 255)"}
    }
    return (
        <div className='ToDo' onClick={selCall(todo)}>
            <h1 className='id'>{todo.id}</h1>
            <h1 className='name'>{todo.name}</h1>
            <h1 className='status'>{todo.status}</h1>
        </div>
    );
}