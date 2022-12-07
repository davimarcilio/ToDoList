import React from 'react';
import Trash from '../assets/images/trash.png'

export default function DeletItem(props) {
    function handleDelet(e) {
        // console.log(e.target.parentNode.parentNode.firstChild.nextSibling.innerText);
        console.log(props.item.itemId);
        console.log(props.items.filter(item => item.id != props.item.id));
    }

    return (
        <button onClick={handleDelet}><img className="w-fit" src={Trash} alt="trash" /></button>
    )
}