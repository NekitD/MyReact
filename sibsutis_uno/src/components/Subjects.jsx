import React, { useState } from 'react'
import Searcher from './Searcher';
import Subject from './Subject';
import '../styles/Subjects.css'


export default function Subjects({data, filters}){
    const [filterString, setFilterString] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [selected, setSelectedSub] = useState(0);


    setTimeout(()=>{
            if(filterString && filterString.length !== 0){
                setFilteredData(data.filter(el => el.name.toLowerCase().includes(filterString.toLowerCase())));
            }else{
                setFilteredData(data);
            }
        }, 500
    );

    return (
        <div className='Subjects'>
            <div className='Subjects__List'>
                <Searcher 
                    filters={filters} 
                    filterString={filterString} 
                    setFilterString={setFilterString}
                />
                {
                    filteredData.map((subject)=>{
                        return <Subject key={subject.id}  data={subject} selected={selected} callback={setSelectedSub}/>
                    })
                }
            </div>
        </div>
    );
}