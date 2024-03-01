import './App.css';
import Registration from './components/Registration';
import Supernavbar from './components/Supernavbar';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Profile from './components/Profile';
import CreateCampaign from './components/Createcampaign';
import Campaign from './components/Campaign';
import ExploreCampaign from './components/Explorecampaign';


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-full">
        <Supernavbar></Supernavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />"
          <Route path="/createcampaign" element={<CreateCampaign />} />
          <Route path="/campaign/:campaignId" element={<Campaign />} />
          <Route path="/explorecampaign" element={<ExploreCampaign />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
