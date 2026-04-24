import React from 'react'
import '../styles/TeachersList.css'
import Teacher from "./Teacher"

export default function TeachersList({data}){
    return (
        <div className='TeachersList'>
            {data.map((teacher)=>{return <Teacher key={teacher.id} data={teacher}/>})}
        </div>
    );
}