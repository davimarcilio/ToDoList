import React from 'react';
import Trash from '../assets/images/trash.png'

export default function DeletItem(props) {
    function handleDelet(e) {
        const items = props.items.filter(item => item.id !== props.itemId)
        props.onHandleDeleted(items)
        props.onChecked(false)
    }


    return (
        <button onClick={handleDelet}><img className="w-fit" src={Trash} alt="trash" /></button>
    )
}