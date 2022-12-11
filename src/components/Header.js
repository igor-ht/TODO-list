import React, { useContext } from 'react';
import ListContext from '../ListContext';


export function Header() {
  
  const { addTodoItem } = useContext(ListContext);
  
  function handleInputKey(event){
    if (event.key === 'Enter') {
      addTodoItem(event.target.value);
      event.target.value = '';
    }
  }
  
  return ( 
    <header className="header">
      <h1>To Do </h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={handleInputKey} />
    </header>
   )
}


