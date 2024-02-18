import './App.css';
import Registration from './components/Registration';
import Supernavbar from './components/Supernavbar';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Supernavbar></Supernavbar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  )
}

export default App;
