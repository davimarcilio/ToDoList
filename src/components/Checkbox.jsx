import React, { useEffect } from "react";
import Check from '../assets/images/check.png';
export default function CheckBox(props) {
    useEffect(() => {
        let buttons = document.querySelectorAll('.checkbox');
        buttons.forEach(button => {
            button.addEventListener('click', handleCheck);
        })
    }, [])
    function handleCheck(element) {
        if (this.className.includes('checked')) {
            this.className = 'h-5 w-5 border-2 rounded-full border-blue-figma flex items-center justify-center'
            this.children[0].className = 'hidden'
            props.onChecked(false)
        } else {
            this.className = 'checked h-5 w-5 border-2 rounded-full border-purple-figma flex items-center justify-center bg-purple-figma'
            this.children[0].className = ''
            props.onChecked(true)
        }

    }
    return (
        <button className="checkbox h-5 w-5 border-2 rounded-full border-blue-figma flex items-center justify-center"><img className="hidden" src={Check} alt="check" /></button>
    )
}