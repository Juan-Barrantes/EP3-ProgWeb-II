import { useContext } from 'react'
import { ToDoContext } from '../ToDoContext'
import '../styles/Nav.css'

function Navbar() {
  const [todos,] = useContext(ToDoContext)
  return (
    <header>
      <nav>
        <div className="logo">
          Grupo 3 - TodoList App 
        </div>
      </nav>
    </header>
  )
}

export default Navbar