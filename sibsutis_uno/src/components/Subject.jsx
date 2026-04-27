import React from 'react'
import '../styles/Subject.css'

export default function ({data, callback, selected}){
    let style = (selected.id === data.id) ? {backgroundColor: "rgb(0, 57, 201)"} : {};
    return (
        <button className='Subjects__Subject' style={style} onClick={()=>{callback((selected.id !== data.id) ? data : 0);}}>
            {data.name}
        </button>
    );
}