import ListContext from "../ListContext";
import { useContext } from "react";


export function SetListItems() {
  const { todos_list, setTodos, setEditingMode, SetToggleItem, destroyTodo  } = useContext(ListContext);

  function handleEditInput(event) {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  }

  const editOnBlur = (event) => {
    let new_list = todos_list.map(item => {
      if (String(item.id) === String(event.target.parentNode.id)) {
        item.title = event.currentTarget.value;
        return item;
      }
      else {
        return item;
      }
    });
    event.target.parentNode.className = event.target.parentNode.className.replace('editing', '');
    setTodos(new_list);
  }

  return (
    <ul className="todo-list">
    {todos_list.map((item) => (
      <li key={item.id} id={item.id} onDoubleClick={setEditingMode} onKeyDown={handleEditInput}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={SetToggleItem} value={item.id} />
          <label>{item.title}</label>
          <button className="destroy" onClick={destroyTodo} value={item.id}/>
        </div>
        <input className="edit" onBlur={editOnBlur}/>
      </li>
    ))}
    </ul>
  )
}