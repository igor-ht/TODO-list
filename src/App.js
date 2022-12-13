import { HomePage } from './Pages/Home';
import { Outlet } from 'react-router-dom';
import ListContext from './Context/ListContext';
import useTodos from './TodosApi';

function App() {
  
  const todoApi = useTodos();

  return (
    <>
      <HomePage/>
      <ListContext.Provider value={todoApi}>
        <Outlet/>
      </ListContext.Provider>
    </>
  )
}

export default App;