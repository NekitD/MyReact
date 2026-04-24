import React from 'react'
import ToDo from './ToDoElem'

export default function ToDoList({list}){
    return (
        <div className='ToDoList'>
            {list.map((elem)=>{
                return <ToDo key={elem.id} todo={elem}/>
            })}
        </div>
    );
}