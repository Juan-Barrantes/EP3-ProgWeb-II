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

        <div className="todos__number">
          <span>
            {todos.length >0 ?
              <div>You have {todos.length  } to do</div>
              :
              <h2>No task to do, great!.  You rock  😎</h2>
            }
          
            </span>
        </div>
        <div>{}</div> 
      </nav>
    </header>
  )
}

export default Navbar