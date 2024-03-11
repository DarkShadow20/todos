import { useEffect, useState } from 'react'

import './App.css'
import CreateTodo from './components/CreateTodo'
import FetchTodo from './components/FetchTodo'

function App() {
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <CreateTodo></CreateTodo>
        </div>
        <div>
          <FetchTodo></FetchTodo>
        </div>
      </div>
    </>
  )
}

export default App
