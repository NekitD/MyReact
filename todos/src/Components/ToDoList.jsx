import React from 'react'
import ToDo from './ToDoElem'
import '../Styles/ToDoList.css'

export default function ToDoList({name, list}){
    return (
        <div className='ToDoList'>
            <h1 className='ListName'>{name}</h1>
            {list.map((elem)=>{
                return <ToDo key={elem.id} todo={elem}/>
            })}
        </div>
    );
}