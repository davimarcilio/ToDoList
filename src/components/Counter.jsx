import React from "react";
export default function Counter(props) {
    return (
        <div className='flex gap-2'>
            {props.children}
            <span className='px-2 bg-gray-300-figma rounded-full text-xs font-Inter font-bold flex items-center text-gray-200-figma'>{props.count}</span>
        </div>

    )
}