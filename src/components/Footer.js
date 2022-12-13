import React, { useContext } from 'react';
import ListContext from '../Context/ListContext';


export function Footer() {
  const { todos_list, todos_left, destroyAllDoneTodos} = useContext(ListContext)

  return (
    <>
    {todos_list.todos.length > 0 && 
      <footer className="footer">
        <span className="todo-count"><strong>{todos_left}</strong> items left</span>
        <button className="clear-completed" onClick={destroyAllDoneTodos}>Clear completed</button>
      </footer>
    }
    </>

  )
}