import React from 'react'
import '../styles/Teacher.css'

export default function Teacher({data, callback, selected}){
    return (
        <button className='Teachers__Teacher' onClick={()=>{callback(data)}}>
            {data.name}
        </button>
    );
}