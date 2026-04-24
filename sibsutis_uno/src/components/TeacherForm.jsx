import React from 'react'
import '../styles/TeacherForm.css'

export default function TeacherForm({data}){
    return (
        <div className='Teachers__Form'>
            <div className='Teachers__Header'>
                <img className='Teachers__Img'/>
                <h1 className='Teachers__Name'>{data?.name}</h1>
            </div>
            <h1>Описание:</h1>
            <div className='Teachers__Description'>
                {data?.description}
            </div>
            <div className='Teachers__Comments'>
                {data?.comments}
            </div>
        </div>
    );
}