import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      escoger tareas
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      menu de tareas
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <button type="asignar tarea" className="btn btn-primary">
    Submit
  </button>
</form>


<div className='filtros'>
      <button onClick={()=> setFilter("todas")} > ver todas </button>
      <button onClick={()=> setFilter("Pendientes")} > Pendientes </button>
      <button onClick={()=> setFilter("completadas")} > completadas </button>
    </div>

    </>
  )
}

export default App
