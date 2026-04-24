import React from 'react'
import '../styles/Teacher.css'

export default function Teacher({data, callback, selected}){
    let style = (selected.id === data.id) ? {backgroundColor: "rgb(0, 57, 201)"} : {};
    return (
        <button className='Teachers__Teacher' style={style} onClick={()=>{callback((selected.id !== data.id) ? data : 0);}}>
            {data.name}
        </button>
    );
}