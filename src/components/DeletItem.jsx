import React from 'react';
import Trash from './Trash'

export default function DeletItem(props) {
    function handleDelet(e) {
        const items = props.items.filter(item => item.id !== props.itemId)
        props.onHandleDeleted(items)
        props.onChecked(false)
    }


    return (
        <button onClick={handleDelet}>
            <Trash />
        </button>
    )
}

{/* <img className="w-fit hover:bg-gray-400-figma rounded " src={Trash} alt="trash" /> */ }