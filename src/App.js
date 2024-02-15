import './App.css';
import Registration from './components/Registration';
import Supernavbar from './components/Supernavbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Supernavbar></Supernavbar>
      <Routes>
        <Route path="/" element={<Registration />} />
        {/* <Route path="/registration" element={}/>
        <Route path="/login" element={} />  */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
