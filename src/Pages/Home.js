import { Link } from "react-router-dom"

export function HomePage() {


return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <span className="navbar-brand fs-1 m-3">TODOs</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fs-3 m-3" to={`sign-in`}>Sign-In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-3 m-3" to={`todos-list`}>MyTodo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-3 m-3" to={`create-list`}>Create ToDo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)

}