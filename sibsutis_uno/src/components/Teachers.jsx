import React, { useState } from 'react'
import '../styles/Teachers.css'
import Teacher from "./Teacher"
import Form from "./TeacherForm"

export default function Teachers({data}){
    const [selectedTeach, setSelectedTeach] = useState(0);
    return (
        <div className='Teachers'>
            <Form teacher={selectedTeach}/>
            <div className='Teachers__List'>
                {data.map((teacher)=>{return <Teacher key={teacher.id} data={teacher}/>})}
            </div>
        </div>
    );
}