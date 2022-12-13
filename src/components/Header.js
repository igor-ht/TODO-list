import React, { useContext } from 'react';
import ListContext from '../Context/ListContext';


export function Header() {
  
  const { todos_list, addTodoItem } = useContext(ListContext);
  
  function handleInputKey(event){
    if (event.key === 'Enter') {
      addTodoItem(event.target.value);
      event.target.value = '';
    }
  }
  
  return ( 
    <header className="header">
      <h1>{todos_list.title}</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={handleInputKey} />
    </header>
   )
}


