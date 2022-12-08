import React from 'react';
import Checkbox from './Checkbox';
import DeletedItem from './DeletItem';




export default function ListItem(props) {


    function onChecked(checked) {
        props.item.checked = checked;
        localStorage.setItem('items', JSON.stringify(props.items))
        props.onCheckedTasks()
    }



    return (
        <li className={props.item.checked ? "transition-colors duration-500 font-Inter text-sm text-gray-100-figma p-4 bg-gray-500-figma border-gray-500-figma border rounded-lg flex justify-between items-start" : "duration-500 transition-colors font-Inter text-sm text-gray-100-figma p-4 bg-gray-500-figma border-gray-300-figma border rounded-lg flex justify-between items-start"}>
            <div className='flex gap-3'>
                <Checkbox items={props.items} item={props.item} onChecked={onChecked}></Checkbox>
                <p className={props.item.checked ? "transition-all duration-500 transiti max-w-2xl line-through text-gray-400-figma" : "duration-500 transition-all max-w-2xl"}>
                    {props.item.text}
                </p>
            </div>
            <DeletedItem onChecked={onChecked} onHandleDeleted={props.onHandleDeleted} items={props.items} itemId={props.item.id} />
        </li>
    )
}