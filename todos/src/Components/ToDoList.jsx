import React from 'react'
import ToDo from './ToDoElem'
import '../Styles/ToDoList.css'
import AddForm from './AddTool'

export default function ToDoList({name, list}){
    return (
        <div className='ToDoList'>
            <AddForm />
            <h1 className='ListName'>{name}</h1>
            {list.map((elem)=>{
                return <ToDo key={elem.id} todo={elem}/>
            })}
        </div>
    );
}