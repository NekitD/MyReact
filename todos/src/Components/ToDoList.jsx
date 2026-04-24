import React, { useState } from 'react'
import ToDo from './ToDoElem'
import '../Styles/ToDoList.css'
import AddForm from './AddTool'
import DelButton from './DelTool'

export default function ToDoList({name, list}){
    const [todos, setTodos] = useState(list);
    const [selected, setSelect] = useState(0);

    function addTodo(todo){
        todo.id = todos.length + 1;
        setTodos([...todos, todo]);
    }

    function delTodo(todo){
        setTodos(todos.filter(el => el.id !== todo.id));
        setSelect(0);
    }

    function selectHandler(todo){
        setSelect((todo.id !== selected.id ? todo : 0));
    }

    return (
        <div className='ToDoList'>
            <AddForm addCallback={addTodo}/>
            <DelButton selected={selected} delCallback={delTodo}/>
            <h1 className='ListName'>{name}</h1>
            {todos.map((elem)=>{
                return <ToDo key={elem.id} todo={elem} selCall={selectHandler} selected={selected}/>
            })}
        </div>
    );
}