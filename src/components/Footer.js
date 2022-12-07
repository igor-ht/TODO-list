import React from 'react';

export function Footer(props) {

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{props.todosLeft}</strong> items left</span>
      <button className="clear-completed" onClick={props.onDestroyAll}>Clear completed</button>
    </footer>
  )
}