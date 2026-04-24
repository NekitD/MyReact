import React from 'react'

export default function AddTool(){
    return (
        <form className='AddTool' defaultChecked={false}>
            <textarea placeholder='Название'></textarea>
            <button onClick={(event)=>{event.preventDefault()}}>Создать</button>
        </form>
    );
}