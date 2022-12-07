import React from 'react';
import Checkbox from './Checkbox';
import Trash from '../assets/images/trash.png'
export default function Item(props) {

    return (
        <li className="font-Inter text-sm text-gray-100-figma p-4 bg-gray-500-figma border-gray-300-figma border rounded-lg flex justify-between items-start">
            <Checkbox></Checkbox>
            <p className="px-3 max-w-2xl">Teste</p>
            <button><img className="w-fit" src={Trash} alt="trash" /></button>
        </li>
    )
}