import './styles/Todo.css';
import React, { useEffect, useState } from 'react';
import Logo from './assets/images/logo.png';
import Plus from './assets/images/plus.png';
import Content from './components/Content';
import Item from './components/Item';


export default function App() {
  const [items, setItems] = useState([])
  const [text, setText] = useState('')
  function onHandleDeleted(items) {
    setItems(items)
  }

  function createTodo(e) {
    e.preventDefault();
    let item = new Item(text, false)
    setItems([...items, item])
    setText('')
  }

  return (
    <main >
      <header className='w-full py-20 flex flex-col justify-center items-center bg-gray-700-figma'>
        <img className='w-fit' src={Logo} alt="Logo" />
      </header>
      <section className='absolute top-44 max-w-3xl w-full ml-auto mr-auto left-0 right-0'>
        <form className='flex'>
          <input onChange={(e) => setText(e.target.value)} className='w-full bg-gray-500-figma p-4 font-Inter text-base rounded-lg border-gray-700-figma border-1 text-gray-200-figma' type="text" placeholder='Digite uma nova tarefa' value={text} />
          <button onClick={createTodo} className='flex items-center justify-between p-4 bg-blue-dark-figma ml-2 rounded-lg '>
            <p className='font-Inter font-bold text-sm text-gray-100-figma'>Criar</p>
            <img className='ml-2 pr-1' src={Plus} alt="more" />
          </button>
        </form>
        <Content found={true} items={items} onHandleDeleted={onHandleDeleted} />
      </section>


    </main>
  )
}
