import { useContext } from 'react'
import { ToDoContext } from '../ToDoContext'
import Swal from 'sweetalert2'
import '../styles/ToDoItem.css'

function ToDoItem({ item }) {

  const [todos, setTodos] = useContext(ToDoContext)

  const handleCompleted = () => {
    setTodos(todos.map((element) => {
      if (element.id === item.id) {
        return {
          ...element,
          status: !element.status
        }
      } else {
        return element
      }
    }))
  }

  const deleteTodoItem = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgba(90, 241, 136, 0.842)',
      cancelButtonColor: '#ff4e6e',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter((el) => el.id !== item.id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <div className={item.status ? 'item__completed' : 'todo__item'}>

      <div className="content">
        <p>{item.content}</p>
      </div>

      <div className="options">
        <button 
          className={item.status ? 'done' : 'undone'} 
          type='button'
          onClick={handleCompleted}
          aria-label="Complete to do elemet"
        >
          <i  className=''>✔</i>

        </button>
        <button 
          className={item.status ? 'trashDone' : 'trash'}
          type='button'
          onClick={deleteTodoItem}
          aria-label="Delete to do element"
        ><i className="  ">Delete</i></button>

      </div>
    </div >
  )
}

export default ToDoItem