import { useState } from 'react'
import { Button } from './Componens/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <div>
      <h1>Welcome to the App</h1>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
    </>
  )
}

export default App
