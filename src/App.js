import './App.css';
import Registration from './components/Registration';
import Supernavbar from './components/Supernavbar';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Supernavbar></Supernavbar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
