import React from 'react';
import Counter from './Counter';
import Non from './Non';
import List from './List';
export default function Content(props) {
    return (
        <section className='flex flex-col gap-6 mt-16'>
            <section className='flex justify-between'>
                <Counter count={0}>
                    <h1 className='text-blue-figma font-bold font-Inter text-sm '>Tarefas criadas</h1>
                </Counter>
                <Counter count={0} >
                    <h1 className='text-purple-figma font-bold font-Inter text-sm'>Concluídas</h1>
                </Counter>
            </section>
            {props.found ? <List /> : <Non />}
        </section>
    )
}