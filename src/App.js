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
        <Route path="/" element={<Login />} />
        {/* <Route path="/registration" element={}/>
        <Route path="/login" element={} />  */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
