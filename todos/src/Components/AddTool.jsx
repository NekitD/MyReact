import React from 'react'

export default function AddTool({addCallback}){
    return (
        <form className='AddTool'>
            <input type="text" id="name" placeholder='Название' required/>
            <button onClick={(event)=>{
                        const data = new FormData(this)
                        event.preventDefault(); 
                        addCallback({name: data.name, status: "Получено"});
                    }
                }>
                Создать
            </button>
        </form>
    );
}