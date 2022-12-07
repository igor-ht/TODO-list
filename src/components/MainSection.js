import React from 'react';
import { SetListItems } from './ListItem';

export function MainSection(props) {

  function setToggleAll(event) {
    props.onToggleAll(event);
  }

  return (
    <section className="main">
        <input className="toggle-all" type="checkbox" onChange={setToggleAll} />

        <SetListItems
        items={props.items} onToggleItem={props.onSingleToggle} useState={props.useState}
        onDestroyButton={props.onDestroyButton} setEditingMode={props.setEditingMode}
        />

    </section>
  )
}