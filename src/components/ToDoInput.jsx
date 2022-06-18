/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from 'react'
// import Swal from 'sweetalert2'
import { ToDoContext } from '../ToDoContext'
import '../styles/ToDoInput.css'

function ToDoInout({ setStatus, status, setFilteredTodos }) {
  const [todos, setTodos] = useContext(ToDoContext)
  const [inputValue, setInputValue] = useState('')

  const updateInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()
    if (inputValue === '') {
   
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          content: inputValue,
          status: false,
          id: Math.random() * 1000,
        },
      ])
      setInputValue('')
    }
  }

  const handleSelect = (event) => {
    setStatus(event.target.value)
  }

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((item) => item.status === true))
        break

      case 'uncompleted':
        setFilteredTodos(todos.filter((item) => item.status === false))
        break

      default:
        setFilteredTodos(todos)
    }
  }

  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocal = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  useEffect(() => {
    getLocal()
  }, [])

  useEffect(() => {
    handleFilter()
    saveLocal()
  }, [todos, status])
  return (
    <>
      <div className="input__container">
        <form onSubmit={addTodo}>
          <label htmlFor='input' />
          <i className="fas fa-pen pen"></i>
          <input
            id='input'
            value={inputValue}
            type="text"
            placeholder='add '
            onChange={updateInputValue}
          />

          <button className='input__button ' aria-label="Submit to do element">
            <i className="fas fa-plus btn btn-success .font-weight-bolder">+</i>
          </button>
        </form>

        <select onChange={handleSelect} name="To Do Filter" className='filter__todo'>
          <option value="all">All</option>
          <option value="completed">Done</option>
          <option value="uncompleted">Undone</option>
        </select>
      </div>
    </>
  )
}

export default ToDoInout
