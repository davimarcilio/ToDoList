import React from "react";
import Logo from '../assets/images/logo.png';
export default function Header() {
    return (
        <header className='w-full py-20 flex flex-col justify-center items-center bg-gray-700-figma'>
            <img className='w-fit' src={Logo} alt="Logo" />
        </header>
    )
}