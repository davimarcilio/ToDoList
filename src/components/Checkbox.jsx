import React, { useEffect } from "react";
import Check from '../assets/images/check.png';
export default function CheckBox(props) {
    function checked(button, img) {
        if (button.className.includes('checked')) {
            img.className = 'img hidden';
            props.onChecked(false);
            return button.className = 'checkbox h-5 w-5 border-2 rounded-full border-blue-figma flex items-center justify-center';
        }
        img.className = 'img';
        props.onChecked(true);
        return button.className = 'checked checkbox h-5 w-5 border-2 rounded-full border-purple-figma flex items-center justify-center bg-purple-figma';
    }
    function handleCheck(e) {

        // const item = props.items.filter(item => item.id === props.item.id)
        // const items = props.items.filter(item => item.id !== props.item.id)



        if (e.target.className.includes('img')) {
            let button = e.target.parentNode;
            let img = e.target;
            checked(button, img);
        } else {
            let button = e.target;
            let img = e.target.children[0];
            checked(button, img);
        }


    }
    return (

        <button onClick={handleCheck} className="checkbox h-5 w-5 border-2 rounded-full border-blue-figma flex items-center justify-center"><img className="img hidden" src={Check} alt="check" /></button>
    )
}