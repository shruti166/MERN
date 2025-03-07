
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
 <h1>
  Movie App
  <BrowserRouter>
  <Routes>
    <Route element={<Login />} path="/login"/>
    <Route element={<Register />} path="/register"/>
  </Routes>
  </BrowserRouter>
 </h1>
    </>
  )
}

export default App
