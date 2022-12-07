import React from 'react';

export function Header(props) {

  function handleInputKey(event){
    if (event.key === 'Enter') {
      props.onAddItem(event.target.value);
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


