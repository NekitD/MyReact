import React from 'react'
import '../styles/NavButton.css'

export default function NavButton({name}){
    return (
        <button className='Navbar__button'>
            {name}
        </button>
    );
}