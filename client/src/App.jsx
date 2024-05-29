import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import FindaDoctor from './pages/FindaDoctor';
import DoctorDetails from './pages/DoctorDetails';
import NavBar from './components/NavBar';
import { AuthProviderWrapper } from './context/AuthContext';
import Services from './pages/Services';
import Contact from './pages/Contact';

const AppContent = () => {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/find" element={<PrivateRoute><FindaDoctor /></PrivateRoute>} />
        <Route path="/doctor/:id" element={<PrivateRoute><DoctorDetails /></PrivateRoute>} />
        <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProviderWrapper>
      <AppContent />
    </AuthProviderWrapper>
  );
}

export default App;
