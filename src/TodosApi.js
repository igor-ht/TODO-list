import * as React from 'react';


export default function useTodos() {

  // useState for an object with the list's title and tasks
  const [ todos_list, setTodos ] = React.useState({
    title: 'TodoApp',
    todos: []
  });
  
  // useState for a Number of done/undone numbers of tasks in the list
  const [ todos_left, setTodosLeft ] = React.useState(0);

/*   React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then( response => response.json())
        .then(setTodos)
  }, []); */

  // useEffect to update the done/undone tasks in the list
  React.useEffect(() => {
    if (todos_list.todos.length > 0) {
      let undoneTodos = {}
      undoneTodos.title = todos_list.title;
      undoneTodos.todos = todos_list.todos.filter(item => item.completed === false);
      setTodosLeft(undoneTodos.todos.length);
    }
    console.log('inside useEffect');
  }, [todos_list]);  


  const addTodoItem = (task) => {
    if (task.length < 2) return;  

    let updateTodos = {}
    updateTodos.title = todos_list.title;
    let new_task = [{id: Date.now().toString(),title: task, completed: false}]
    updateTodos.todos = todos_list.todos.concat(new_task);
    setTodos(updateTodos);
  }

  const SetToggleItemConstruct = (item, event) => {
    let listItem = event.target.parentNode.parentNode
    if (item.id === event.target.value) {
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
    let updateTodos = {}
    updateTodos.title = todos_list.title
    updateTodos.todos = todos_list.todos.map((item) => SetToggleItemConstruct(item, event));
    setTodos(updateTodos);
    setTodosLeft(updateTodos.todos.length)
  }

  const toggleAllConstructor = (item, event) => {
    let allListItems = event.currentTarget.nextSibling.querySelectorAll('li');
    let allToggleInput = event.currentTarget.nextSibling.querySelectorAll('.toggle');
    if (event.target.checked) {
      todos_list.todos.forEach(item => {
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
      todos_list.todos.forEach(item => {
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
    let updateTodos = {}
    updateTodos.title = todos_list.title;
    updateTodos.todos = todos_list.todos.map(item => toggleAllConstructor(item,event));
    setTodos(updateTodos);
    setTodosLeft(updateTodos.todos.length)  
  }

  const destroyTodo = (event) => {
    let updateTodos = {}
    updateTodos.title = todos_list.title
    updateTodos.todos = todos_list.todos.filter(item => item.id !== event.target.value);
    setTodos(updateTodos);
    setTodosLeft(updateTodos.todos.length)
  }

  const destroyAllDoneTodos = () => {
    let updateTodos = {}
    updateTodos.title = todos_list.title
    updateTodos.todos = todos_list.todos.filter(item => item.completed !== true);
    setTodos(updateTodos);
    setTodosLeft(updateTodos.todos.length)
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