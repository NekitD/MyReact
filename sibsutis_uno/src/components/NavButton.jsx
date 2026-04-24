import React from 'react'
import '../styles/NavButton.css'

export default function NavButton({id, name, callback, selected}){
    let style = (selected === id) ? {backgroundColor: "green"} : {};
    return (
        <button className='Navbar__button' style={style} 
            onClick={
                ()=>{callback((selected !== id) ? id : 0);}
                }>
            {name}
        </button>
    );
}