import React, { useState } from 'react'
import '../styles/Searcher.css'

export default function Searcher({filters}){
    const [activeFilters, setActiveFilters] = useState(false);
    return (
        <div className='Searcher'>
            <input className='Searcher__String' type='text' placeholder='Поиск'/>
            <button className='Searcher__FilterOpener' onClick={()=>{setActiveFilters(activeFilters === false)}}>
                {(activeFilters) ? "Фильтры >" : "Фильтры <"}
            </button>
            {
                (activeFilters) ?
                <div className='Searcher__Filters'>
                    {
                        filters.map((filter)=>{
                            return (
                                <div className='Searcher__Filter'>
                                    <h4>{filter.name}</h4>
                                    <div className='Searcher__FilterValues'>
                                        {filter.values.map((value)=>{
                                            return (
                                                <button className='Searcher__FilterValue'>
                                                    {value}
                                                </button>
                                            );
                                        })}
                                        </div>
                                    </div>
                                );
                            })
                        }
                </div>
                : null
            }
        </div>
    );
}