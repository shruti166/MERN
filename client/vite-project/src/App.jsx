
import { useSelector } from 'react-redux';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { Spin } from 'antd';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'antd/dist/antd.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './pages/Home';


function App() {
  const loading = useSelector((state) => state.loader.loading);  // Ensure correct path
  console.log(loading);

  return (
    <>
 <h1>

  <BrowserRouter>
  {loading ? (
    <div><Spin /></div>
  ) : <Routes>
  <Route element={<Login />} path="/login"/>
  <Route element={<Register />} path="/register"/>
  <Route element={<ProtectedRoutes><Home /></ProtectedRoutes>} path="/home"/>
</Routes>}
  
  </BrowserRouter>
 </h1>
    </>
  )
}

export default App
