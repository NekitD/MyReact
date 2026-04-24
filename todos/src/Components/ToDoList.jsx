import React from 'react'
import ToDo from './Components/ToDoElem'

export default function ToDoList({list}){
    return (
        <div className='ToDoList'>
            {list.map(
                (elem)=>{<ToDo key={elem.id} todo={elem}/>}
            )}
        </div>
    );
}