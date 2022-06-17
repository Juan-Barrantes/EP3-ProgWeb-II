import ToDoItem from './TodoItem'
import '../styles/ToDoList.css'

function TodoList({ filteredTodos }) {

  return (
    <div className='todo__list'>
      {filteredTodos.map(item => (
        <ToDoItem
          item={item}
          key={item.id}
        />
      ))}
    </div>
  )
}

export default TodoList