import { useState, useEffect } from 'react'
import './App.css'
// Another components
import NavBarTop from '../NavBar/NavBarTop'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <NavBarTop />
      <div className='App'>
      </div>
    </div>
  )
}

export default App
