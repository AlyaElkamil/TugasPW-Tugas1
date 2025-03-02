import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navibar from './components/Navibar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Hobi from './pages/Hobi';
import Sertifikasi from './pages/Sertifikasi';
import Galeri from './pages/Galeri';
import Advice from './pages/Advice'
import './App.css';

function App() {
  return (
    <div>
      <Navibar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/hobi" element={<Hobi />} />
        <Route path="/sertifikasi" element={<Sertifikasi />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/advice" element={<Advice />} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;