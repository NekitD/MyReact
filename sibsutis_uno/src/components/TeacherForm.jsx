import React from 'react'
import '../styles/TeacherForm.css'

export default function TeacherForm({data}){
    return (
        <div className='Teachers__Form'>
            <div className='Teachers__Header'>
                <img className='Teachers__Img' src={data?.image}/>
                <div className='Teachers__Names'>
                    <h2>Полное имя:</h2>
                    <h1 className='Teachers__Name'>{data?.name}</h1>
                    <h2>Также известен как:</h2>
                    <h2 className='Teachers__Nick'>{data?.nickname}</h2>
                </div>
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