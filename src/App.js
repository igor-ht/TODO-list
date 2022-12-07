import './App.css';
import * as React from 'react';
import {Header} from "./components/Header.js"
import {MainSection} from "./components/MainSection.js"
import {Footer} from "./components/Footer.js"



function App() {

  const [ todos_list, setTodos ] = React.useState([])
  const [ todos_left, setTodosLeft ] = React.useState(0);

/*   React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then( response => response.json())
        .then(setTodos)
  }, []); */

  // eslint-disable-next-line
  React.useEffect(() => {
    let undoneTodos = todos_list.filter(item => item.completed === false);
    setTodosLeft(undoneTodos.length);
  })

  // header methods
  const addTodoItem = (title) => {
    let new_list = todos_list.concat([{id: Date.now(),title: title, completed: false}])
    setTodos(new_list)
  }

  //mainSection methods
  const SetToggleItem = (event) => {
    let listItem = event.target.parentNode.parentNode
      todos_list.forEach(item => {
      if (item.id === Number(event.target.value)) {
        if (item.completed === true){
          item.completed = false;
          listItem.className = ''
        } else {
          item.completed = true;
          listItem.className = 'completed'
        }
      }
    })
    // update the "todos left" at the footer component
    let undoneTodos = todos_list.filter(item => item.completed === false);
    setTodosLeft(undoneTodos.length);
  }

  const toggleAll = (event) => {
    let listItem = event.currentTarget.nextSibling.querySelectorAll('li');
    let toggleInput = event.currentTarget.nextSibling.querySelectorAll('.toggle');
    if (event.target.checked) {
      todos_list.forEach(item => {
        item.completed = true;
      });
      listItem.forEach(item => {
        item.className = 'completed';
      });
      toggleInput.forEach(item => {
        item.checked = true;
      });

    } else {
      todos_list.forEach(item => {
        item.completed = false;
      });
      listItem.forEach(item => {
        item.className = '';
      });
      toggleInput.forEach(item => {
        item.checked = false;
      })
    }
    let undoneTodos = todos_list.filter(item => item.completed === false);
    setTodosLeft(undoneTodos.length);
  }

  const destroyTodo = (event) => {
    let new_list = todos_list.filter(item => item.id !== Number(event.target.value));
    setTodos(new_list)
    setTodosLeft(new_list.length)
  }

  const destroyAllDoneTodos = (event) => {
    let new_list = todos_list.filter(item => item.completed !== true);
    setTodos(new_list);
    setTodosLeft(new_list.length)
  }

  const setEditingMode = (event) => {
    if (event.target.tagName === 'LABEL') {
      event.currentTarget.className = 'editing'
      let inputEdit = event.currentTarget.querySelector('.edit');
      inputEdit.focus();
      inputEdit.value = event.target.textContent;
    }
  }

  return (
    <div>
      <section className='todoapp'>

        <Header onAddItem={addTodoItem} />

        <MainSection 
        items={todos_list} onSingleToggle={SetToggleItem} onToggleAll={toggleAll}
        onDestroyButton={destroyTodo} setEditingMode={setEditingMode}
        />

        <Footer items={todos_list} todosLeft={todos_left} onDestroyAll={destroyAllDoneTodos}/>

      </section>
    </div>
  )
}

export default App;
