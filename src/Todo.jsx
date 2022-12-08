import './styles/Todo.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Content from './components/Content';
import Item from './components/Item';


export default function App() {
  let localItems = JSON.parse(localStorage.getItem('items'));
  if (!!!localItems) {
    localItems = [];
  }
  const [items, setItems] = useState(localItems)
  const [text, setText] = useState('')
  const [found, setFound] = useState(false)
  const allStoragedItems = []

  function onHandleDeleted(items) {
    setItems(items)
  }




  useEffect(() => {


    if (!!localItems) {
      localItems.map(item => {
        return allStoragedItems.push(new Item(item.text, item.checked))
      })
      setItems(allStoragedItems);
    }

  }, [])

  function onHandleText(e) {
    setText(e.target.value)
  }

  useEffect(() => {
    if (items.length !== 0) {
      return setFound(true)
    }
    return setFound(false)

  }, [items.length])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))

  }, [items])

  function createTodo(e) {

    e.preventDefault();

    if (!!text) {
      let item = new Item(text, false)
      setItems([...items, item])

      setText('')

    }

  }

  return (
    <main >
      <Header />
      <section className='absolute top-44 max-w-3xl w-full ml-auto mr-auto left-0 right-0 max-md:px-3'>
        <Form createTodo={createTodo} onHandleText={onHandleText} text={text} />
        <Content found={found} items={items} onHandleDeleted={onHandleDeleted} />
      </section>
    </main>
  )
}
