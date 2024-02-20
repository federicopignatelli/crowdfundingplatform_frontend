import './App.css';
import Registration from './components/Registration';
import Supernavbar from './components/Supernavbar';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Footer from './components/Footer';
import Profile from './components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Supernavbar></Supernavbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />"
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  )
}

export default App;
