import { useEffect, useState } from 'react'
import './App.css'
import CompletedTodo from './components/CompletedTodo'
import CreateTodo from './components/CreateTodo'
import FetchTodo from './components/FetchTodo'

function App() {
  const [todos, setTodos] = useState([])
  const [completedTodos,setCompletedTodos] = useState([])
  useEffect(()=>{
      fetch("http://localhost:3000/todos").then(async function(res){
          const todo = await res.json();
          setTodos(todo.todos)
          setCompletedTodos(todo.todos)
      })
  },[]) 
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <CreateTodo setTodos={setTodos}></CreateTodo>
        </div>
        <div>
          <FetchTodo todos={todos} setCompletedTodos={setCompletedTodos}></FetchTodo>
        </div>
        <div>
          <CompletedTodo todos={completedTodos} ></CompletedTodo>
        </div>
      </div>
    </>
  )
}

export default App
