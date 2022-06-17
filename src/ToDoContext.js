import { useState, createContext } from 'react'

export const ToDoContext = createContext()

export const ToDoProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      content: 'Here is an example, delete me plz',
      status: false,
      id: 1,
    },
  ])

  return (
    <ToDoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </ToDoContext.Provider>
  )
}