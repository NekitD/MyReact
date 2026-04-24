import React from 'react'
import '../styles/Teacher.css'

export default function Teacher({data}){
    return (
        <button className='Teachers__Teacher'>
            {data.name}
        </button>
    );
}