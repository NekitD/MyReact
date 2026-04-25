import React from 'react'
import '../styles/TeacherForm.css'

export default function TeacherForm({data}){

    if(data){
        return (
            <div className='Teachers__Form'>
                <div className='Teachers__Header'>
                    <img className='Teachers__Img' src={data?.image}/>
                    <div className='Teachers__Names'>
                        <h1 className='Teachers__Name'>{(data.name) ? data.name : "..."}</h1>
                        <h2>A.k.a:</h2>
                        <h2 className='Teachers__Nick'>{(data.nickname) ? data.nickname : "..."}</h2>
                    </div>
                </div>
                <h1 className='Teachers__Deschead'>Описание:</h1>
                <div className='Teachers__Description'>
                    {data?.description}
                </div>
                <div className='Teachers__Comments'>
                    {data?.comments}
                </div>
            </div>
        );
    } else {
        return (
            <div className='Teachers__Form___Empty'>
                <h1 className='Teachers__EmptyMessage'>
                    Выберите препода...
                </h1>
            </div>
        );
    }
}