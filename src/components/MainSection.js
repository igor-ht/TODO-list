import { useContext } from 'react';
import ListContext from '../ListContext';
import { SetListItems } from './ListItem';


export function MainSection() {

  const { toggleAll } = useContext(ListContext)

  function setToggleAll(event) {
    toggleAll(event);
  }

  return (
    <section className="main">
      
      <input className="toggle-all" type="checkbox" onChange={setToggleAll} />

       <SetListItems></SetListItems>

    </section>
  )
}