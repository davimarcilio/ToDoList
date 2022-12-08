import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import DeletedItem from './DeletItem';




export default function ListItem(props) {

    const [checked, setChecked] = useState(props.item.checked);

    function onChecked(checked) {
        props.item.checked = checked;

        props.onCheckedTasks()
    }
    useEffect(() => {
        setChecked(checked)
    }, [checked])


    return (
        <li className="font-Inter text-sm text-gray-100-figma p-4 bg-gray-500-figma border-gray-300-figma border rounded-lg flex justify-between items-start">
            <div className='flex gap-3'>
                <Checkbox items={props.items} item={props.item} onChecked={onChecked}></Checkbox>
                <p className={props.item.checked ? "max-w-2xl line-through text-gray-400-figma" : "max-w-2xl"}>
                    {props.item.text}
                </p>
            </div>
            <DeletedItem onChecked={onChecked} onHandleDeleted={props.onHandleDeleted} items={props.items} itemId={props.item.id} />
        </li>
    )
}