import React from 'react'
import '../styles/Navbar.css'
import Tab from "./NavButton"

export default function Navbar({tabs}){
    return (
        <div className='Navbar'>
            {tabs.map((tab)=>{return <Tab name={tab.name}/>})
            }
        </div>
    );
}