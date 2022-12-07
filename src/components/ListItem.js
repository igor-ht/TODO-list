export function SetListItems(props) {

  function handleEditInput(event) {
    if (event.key === 'Enter') {
      let new_list = props.items.map(item => {
        if (String(item.id) === String(event.currentTarget.id)) {
          item.title = event.target.value;
          return item
        }
        else {
          return item
        }
      });
      event.currentTarget.className = '';
      props.useState(new_list);
    }
  }

  const editOnBlur = (event) => {
    let new_list = props.items.map(item => {
      if (String(item.id) === String(event.target.parentNode.id)) {
        item.title = event.currentTarget.value;
        return item;
      }
      else {
        return item;
      }
    });
    event.target.parentNode.className = '';
    props.useState(new_list);
  }

  return (
    <ul className="todo-list">
    {props.items.map((item) => (
      <li id={item.id} onDoubleClick={props.setEditingMode} onKeyDown={handleEditInput}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={props.onToggleItem} value={item.id} />
          <label>{item.title}</label>
          <button className="destroy" onClick={props.onDestroyButton} value={item.id}/>
        </div>
        <input className="edit" onBlur={editOnBlur}/>
      </li>
    ))}
    </ul>
  )
}