import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'SCRUM!'},
    {id: 2, completed: false, title: 'FAST-API!'},
    {id: 3, completed: false, title: 'ALEMBIC!'},
    {id: 4, completed: false, title: 'SQL-ALCHEMY!'},
    {id: 5, completed: false, title: 'RABBIT MQ (client pika)!'},
  ])
    
  function toggleTodo (id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  
  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo (title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]))

  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1> React tutorial</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No tasks for you. Be happy or die!</p>}

      </div>
    </Context.Provider>
  )
}

export default App

