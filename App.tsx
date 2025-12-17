import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateProfile from './pages/CreateProfile';
import ProfileView from './pages/ProfileView';
import Messages from './pages/Messages';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import SearchPage from './pages/SearchPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;