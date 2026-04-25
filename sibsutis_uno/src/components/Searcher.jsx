import React from 'react'
import '../styles/Searcher.css'

export default function Searcher({filters}){
    return (
        <div className='Searcher'>
            <input className='Searcher__String' type='text' placeholder='Поиск'/>
            <button className='Searcher__FilterOpener'/>
            <div className='Searcher__Filters'>

            </div>
        </div>
    );
}