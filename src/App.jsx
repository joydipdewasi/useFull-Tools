import { useState } from 'react'  
import Navber from './components/Navber/Navber'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navber />
    
    </div>
    </>
  )
}

export default App
