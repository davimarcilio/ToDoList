import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import Non from './Non';
import List from './List';
export default function Content(props) {
    function onCheckedTasks() {
        setCheckedTasks(props.items.filter(item => item.checked === true).length)
    }
    const [checkedTasks, setCheckedTasks] = useState(0);
    return (
        <section className='flex flex-col gap-6 mt-16'>
            <section className='flex justify-between'>
                <Counter count={props.items.length}>
                    <h1 className='text-blue-figma font-bold font-Inter text-sm '>Tarefas criadas</h1>
                </Counter>
                <Counter count={checkedTasks > 0 ? `${checkedTasks} de ${props.items.length}` : checkedTasks} >
                    <h1 className='text-purple-figma font-bold font-Inter text-sm'>Concluídas</h1>
                </Counter>
            </section>
            {props.found ? <List onCheckedTasks={onCheckedTasks} onHandleDeleted={props.onHandleDeleted} items={props.items} /> : <Non />}
        </section>
    )
}