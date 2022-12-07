import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import DeletedItem from './DeletItem';




export default function ListItem(props) {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(props.item.checked)
    }, [])



    function onChecked(checked) {
        setChecked(checked)
        props.item.checked = checked
    }



    return (
        <li key={props.item.id} className="font-Inter text-sm text-gray-100-figma p-4 bg-gray-500-figma border-gray-300-figma border rounded-lg flex justify-between items-start">
            <Checkbox onChecked={onChecked}></Checkbox>
            <p className={checked ? "px-3 max-w-2xl line-through text-gray-400-figma" : "px-3 max-w-2xl"}>
                {props.item.text}
            </p>
            <DeletedItem items={props.items} itemId={props.item.id}></DeletedItem>
        </li>
    )
}