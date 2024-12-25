import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes và Route từ react-router-dom
import './App.css';
import Homepage from './pages/client/homepages/Homepage';
import Loginpage from './pages/client/page/Loginpage';
import Music from './pages/client/music/Music';
import ContactPage from './pages/client/page/ContactPage';
import AboutUsPage from './pages/client/page/AboutUsPage';
import NewsPage from './pages/client/page/NewsPage';

import SinglePage from './pages/client/page/SinglePage';
import RegisterPage from './pages/client/page/RegisterPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/music" element={<Music />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/single" element={<SinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
