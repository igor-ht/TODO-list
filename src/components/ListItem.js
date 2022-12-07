export function SetListItems(props) {

  function handleEditInput(event) {
    if (event.key === 'Enter') {
      let label = event.currentTarget.children[0].children[1];
      event.currentTarget.className = '';
      label.innerText = event.target.value;
    }
  }
  const editOnBlur = (event) => {
    let label = event.currentTarget.parentNode.children[0].children[1];
    label.innerText = event.target.value;
    event.target.parentNode.className = '';
  }

  return (
    <ul className="todo-list">
    {props.items.map((item) => (
      <li key={item.id} onDoubleClick={props.setEditingMode} onKeyDown={handleEditInput}>
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