import React from "react";
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

        <button onClick={handleCheck} className=
            {!props.item.checked ? "checkbox transition-all hover:border-blue-dark-figma hover:bg-blue-dark-transparent-figma h-5 w-5 border-2 rounded-full border-blue-figma flex items-center justify-center"
                : 'checked transition-all hover:border-purple-figma hover:bg-purple-figma checkbox h-5 w-5 border-2 rounded-full border-purple-dark-figma flex items-center justify-center bg-purple-dark-figma'}
        > <img className={!props.item.checked ? "img hidden" : "img"} src={Check} alt="check" /></button >
    )
}