import {createBrowserRouter} from "react-router-dom";
import App from './App'
import TodosApp from "./Pages/TodosApp";
import { SignIn } from "./Pages/SignIn";
import { CreateList } from "./Pages/CreateList";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/sign-in',
        element: <SignIn/>
      },
      {
        path: '/todos-list',
        element: <TodosApp/>
      },
      {
        path: '/create-list',
        element: <CreateList/>
      }
    ]
  }
])