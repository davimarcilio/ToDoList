import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Trash from '../assets/images/trash.png'



export default function ListItem(props) {


    const [checked, setChecked] = useState(false);



    function onChecked(checked) {
        setChecked(checked)
    }



    return (
        <li className="font-Inter text-sm text-gray-100-figma p-4 bg-gray-500-figma border-gray-300-figma border rounded-lg flex justify-between items-start">
            <Checkbox onChecked={onChecked}></Checkbox>
            <p className={checked ? "px-3 max-w-2xl line-through" : "px-3 max-w-2xl"}>
                {console.log(props.item)}
            </p>
            <button><img className="w-fit" src={Trash} alt="trash" /></button>
        </li>
    )
}