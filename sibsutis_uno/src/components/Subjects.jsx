import React, { useState } from 'react'
import Searcher from './Searcher';
import Subject from './Subject';


export default function Subjects({data, filters}){
    const [filterString, setFilterString] = useState('');
    const [filteredData, setFilteredData] = useState('');
    const [selected, setSelected] = useState(0);

    return (
        <div className='Subjects'>
            <Searcher 
                filters={filters} 
                filterString={filterString} 
                setFilterString={setFilterString}
            />
            <div className='SubjectsList'>
                {
                    filteredData.map((subject)=>{
                        return <Subject key={subject.id}  data={subject} selected={selected}/>
                    })
                }
            </div>
        </div>
    );
}