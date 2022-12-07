import React from 'react';
import ClipBoard from '../assets/images/clipboard.png';
export default function Non() {
    return (
        <section className='py-16 flex items-center flex-col gap-4 border-t-1 border-gray-300-figma rounded'>
            <img className='w-fit' src={ClipBoard} alt="clip board" />
            <div>
                <h1 className='font-bold font-Inter text-base text-gray-400-figma text-center'>Você ainda não tem tarefas cadastradas <h2 className='font-Inter text-base text-gray-400-figma font-normal'>Crie tarefas e organize seus itens a fazer</h2></h1>

            </div>
        </section>
    )
}