import { useContext } from 'react';
import ListContext from '../Context/ListContext';
import { SetListItems } from './ListItem';


export function MainSection() {

  const { todos_list, toggleAll } = useContext(ListContext)

  return (
    <>
      {todos_list.todos.length > 0 && 
      <section className="main">
        <input className="toggle-all" type="checkbox" onChange={toggleAll} />
        <SetListItems/>
      </section>
      }
    </>
  )
}