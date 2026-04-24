import React, { useState } from 'react'
import '../Styles/AddTool.css'

export default function AddTool({addCallback}){
    const [name, setName] = useState('');
    return (
        <form className='AddTool'>
            <input className="AddTool__field" type="text" value={name} placeholder='Название' onChange={(e)=>{setName(e.target.value)}} required/>
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