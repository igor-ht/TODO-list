import React, { useContext } from 'react';
import ListContext from '../ListContext';


export function Footer() {
  const { todos_left, destroyAllDoneTodos} = useContext(ListContext)

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{todos_left}</strong> items left</span>
      <button className="clear-completed" onClick={destroyAllDoneTodos}>Clear completed</button>
    </footer>
  )
}