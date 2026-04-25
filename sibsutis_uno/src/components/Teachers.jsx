import React, { useState } from 'react'
import '../styles/Teachers.css'
import Teacher from "./Teacher"
import Form from "./TeacherForm"
import Searcher from './Searcher';

export default function Teachers({data, filters}){
    const [selectedTeach, setSelectedTeach] = useState(0);
    const [filterString, setFilterString] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    function filterStringChanged(val){
        setFilterString(val);
        if(filterString && filterString.length !== 0){
            setFilteredData(data.filter(el => el.name.includes(filterString)));
        }else{
            setFilteredData(data);
        }
    }

    return (
        <div className='Teachers'>
            <Form data={selectedTeach}/>
            <div className='Teachers__List'>
                <Searcher 
                    filters={filters} 
                    filterString={filterString} 
                    setFilterString={filterStringChanged}
                />
                {filteredData?.map((teacher)=>{
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