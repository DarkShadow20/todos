import { useEffect, useState } from 'react'
import './App.css'
import CompletedTodo from './components/CompletedTodo'
import CreateTodo from './components/CreateTodo'
import FetchTodo from './components/FetchTodo'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
      fetch("http://localhost:3000/todos").then(async function(res){
          const todo = await res.json();
          setTodos(todo.todos)
      })
  },[]) 
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <CreateTodo setTodos={setTodos}></CreateTodo>
        </div>
        <div>
          <FetchTodo todos={todos}></FetchTodo>
        </div>
        <div>
          <CompletedTodo todos={todos}></CompletedTodo>
        </div>
      </div>
    </>
  )
}

export default App
