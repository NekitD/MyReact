import React from 'react'
import '../styles/Teachers.css'
import Teacher from "./Teacher"

export default function Teachers({data}){
    return (
        <div className='Teachers'>
            <div className='Teachers__Info'>
            
            </div>
            <div className='Teachers__List'>
                {data.map((teacher)=>{return <Teacher key={teacher.id} data={teacher}/>})}
            </div>
        </div>
    );
}