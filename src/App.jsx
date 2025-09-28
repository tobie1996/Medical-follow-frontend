import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './client/Home';
import Login from './client/auth/Login';
import Register from './client/auth/Register';
import MultiStepForm from './client/Consultation/Multi-step Form';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/consultation" element={<MultiStepForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
