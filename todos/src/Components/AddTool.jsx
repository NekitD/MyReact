import React, { useState } from 'react'

export default function AddTool({addCallback}){
    const [name, setName] = useState('');
    return (
        <form className='AddTool'>
            <input value={name} className="AddTool__field" type="text" id="name" placeholder='Название' onChange={(e)=>{setName(e.target.value)}} required/>
            <button onClick={(event)=>{
                        event.preventDefault(); 
                        addCallback({name: name, status: "Получено"});
                        setName('');
                    }
                }>
                Создать
            </button>
        </form>
    );
}