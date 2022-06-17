import { useState } from 'react'
import ToDoInput from './components/ToDoInput'
import TodoList from './components/TodoList'
import { ToDoProvider } from './ToDoContext'
import Navbar from './components/Nav'
import './App.css';


function App() {
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  return (
    <ToDoProvider>
      <Navbar />
      <div className="wrapper">
        <ToDoInput
          setStatus={setStatus}
          status={status}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
        />
        <TodoList filteredTodos={filteredTodos} />
      </div>
    </ToDoProvider>
  );
}

export default App;