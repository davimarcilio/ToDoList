import React from "react";
import Plus from '../assets/images/plus.png';

export default function Form(props) {
    return (
        <form className='flex'>
            <input onChange={props.onHandleText} className='w-full bg-gray-500-figma p-4 font-Inter text-base rounded-lg border-gray-700-figma border-1 text-gray-200-figma' type="text" placeholder='Digite uma nova tarefa' value={props.text} />
            <button onClick={props.createTodo} className='flex items-center justify-between p-4 max-md:px-3 bg-blue-dark-figma ml-2 rounded-lg '>
                <p className='font-Inter font-bold text-sm text-gray-100-figma'>Criar</p>
                <img className='ml-2 pr-1 max-md:hidden' src={Plus} alt="more" />
            </button>
        </form>
    )
}