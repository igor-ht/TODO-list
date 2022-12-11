import * as React from 'react';

export default function useTodos() {

  const [ todos_list, setTodos ] = React.useState([]);
  const [ todos_left, setTodosLeft ] = React.useState(0);

/*   React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then( response => response.json())
        .then(setTodos)
  }, []); */

  React.useEffect(() => {
    let undoneTodos = todos_list.filter(item => item.completed === false);
    setTodosLeft(undoneTodos.length);
    console.log('inside useEffect')
  }, [todos_list]);

    // header methods
  const addTodoItem = (title) => {
    let new_list = todos_list.concat([{id: Date.now(),title: title, completed: false}]);
    setTodos(new_list);
  }

  const SetToggleItemConstruct = (item, event) => {
    let listItem = event.target.parentNode.parentNode
    if (item.id === Number(event.target.value)) {
      if (item.completed === true){
        item.completed = false;
        listItem.className = ''
      } else {
        item.completed = true;
        listItem.className = 'completed';
      }
    }
    return item;
  }

  const SetToggleItem = (event) => {
    let new_list =  todos_list.map((item) => SetToggleItemConstruct(item, event));
    setTodos(new_list);
  }

  const toggleAllConstructor = (item, event) => {
    let allListItems = event.currentTarget.nextSibling.querySelectorAll('li');
    let allToggleInput = event.currentTarget.nextSibling.querySelectorAll('.toggle');
    if (event.target.checked) {
      todos_list.forEach(item => {
        item.completed = true;
      });
      allListItems.forEach(item => {
        item.className = 'completed';
      });
      allToggleInput.forEach(item => {
        item.checked = true;
      });
      return item;
    } else {
      todos_list.forEach(item => {
        item.completed = false;
      });
      allListItems.forEach(item => {
        item.className = '';
      });
      allToggleInput.forEach(item => {
        item.checked = false;
      });
      return item;
    }
  } 

  const toggleAll = (event) => {
    let new_list = todos_list.map(item => toggleAllConstructor(item,event));
    setTodos(new_list);    
  }

  const destroyTodo = (event) => {
    let new_list = todos_list.filter(item => item.id !== Number(event.target.value));
    setTodos(new_list);
    setTodosLeft(new_list.length);
  }

  const destroyAllDoneTodos = () => {
    let new_list = todos_list.filter(item => item.completed !== true);
    setTodos(new_list);
    setTodosLeft(new_list.length);
  }

  const setEditingMode = (event) => {
    if (event.target.tagName === 'LABEL') {
      event.currentTarget.className += ' editing'
      let inputEdit = event.currentTarget.querySelector('.edit');
      inputEdit.focus();
      inputEdit.value = event.target.textContent;
    }
  }

  return {
    todos_list,
    setTodos,
    todos_left,
    addTodoItem,
    SetToggleItem,
    toggleAll,
    destroyTodo,
    destroyAllDoneTodos,
    setEditingMode
  }
}