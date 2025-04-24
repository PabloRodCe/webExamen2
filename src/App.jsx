import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <>
  <a className="btn btn-primary" href="#" role="button">
    
  </a>
  <button className="btn btn-primary" type="submit">
    Task
  </button>
  <button className="btn btn-primary" type="submit">
    Eliminar
  </button>
 
</>
<div className="container-ms">{<>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="checkDefault"
    />
    <label className="form-check-label" htmlFor="checkDefault">
      Default checkbox
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="checkChecked"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="checkChecked">
      Checked checkbox
    </label>
  </div>
</>}</div>


    </>
  )
}

export default App
