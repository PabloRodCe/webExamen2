import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='filtros'>
      <button onClick={()=> setFilter("todas")} > ver todas </button>
      <button onClick={()=> setFilter("Pendientes")} > Pendientes </button>
      <button onClick={()=> setFilter("completadas")} > completadas </button>
    </div>
 

    </>
  )
}

export default App
