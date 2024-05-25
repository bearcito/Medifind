import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';

import FindDoctor from './pages/FindaDoctor';
import DoctorDetails from './pages/DoctorDetails';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find" element={<FindDoctor />} />


        <Route path="/doctor/:id" element={<DoctorDetails />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App
