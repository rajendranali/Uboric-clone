import { useState } from 'react'
import './App.css'
import {Home } from './Component/HomePage/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
