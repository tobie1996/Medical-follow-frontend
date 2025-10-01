import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './client/Home';
import Login from './client/auth/Login';
import Register from './client/auth/Register';
import MultiStepForm from './client/Consultation/Multi-step Form';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './client/Contact';
import PregnancyGuide from './client/PregnancyGuide';
import Profil from './client/Profil';
import AdminDashboard from './admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Route admin séparée */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        
        {/* Routes client avec Header et Footer */}
        <Route path="/*" element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rendez-vous" element={<MultiStepForm />} />
              <Route path="/pregnancyguide" element={<PregnancyGuide />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/consultation" element={<MultiStepForm />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
