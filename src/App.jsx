import { useState } from 'react'
import './App.css'
import GetGifs from './components/GetGifs'
import Nav from './components/Nav'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      
      <BrowserRouter>
      
        <Routes>
          
        <Route
          path={'/'}
          element={<GetGifs/>}/>

        <Route
          path={'/:id'}
          element={<GetGifs/>}/>
        

        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
