import React, { useState } from 'react'
import '../styles/Teachers.css'
import Teacher from "./Teacher"
import Form from "./TeacherForm"
import Searcher from './Searcher';

export default function Teachers({data, filters}){
    const [selectedTeach, setSelectedTeach] = useState(0);
    return (
        <div className='Teachers'>
            <Form data={selectedTeach}/>
            <div className='Teachers__List'>
                <Searcher filters={filters}/>
                {data.map((teacher)=>{
                    return (
                    <Teacher key={teacher.id} 
                        data={teacher} 
                        callback={setSelectedTeach} 
                        selected={selectedTeach}/>
                        )})}
            </div>
        </div>
    );
}