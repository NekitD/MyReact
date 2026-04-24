import React from 'react'
import '../styles/Navbar.css'
import Tab from "./NavButton"

export default function Navbar({tabs, callback, selected}){
    return (
        <div className='Navbar'>
            {tabs.map((tab)=>{
                return (
                <Tab key={tab.id} 
                    id={tab.id} 
                    name={tab.name} 
                    callback={callback} 
                    selected={selected}/>
                )})
            }
        </div>
    );
}