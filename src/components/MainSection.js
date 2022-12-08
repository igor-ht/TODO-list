
export function MainSection(props) {

  function setToggleAll(event) {
    props.onToggleAll(event);
  }

  return (
    <section className="main">
      
      <input className="toggle-all" type="checkbox" onChange={setToggleAll} />

      {props.children} 

    </section>
  )
}