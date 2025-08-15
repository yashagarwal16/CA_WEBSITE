import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import VerifyOTP from './components/Auth/VerifyOTP';
import ServiceDetail from './pages/ServiceDetail';
import Consultation from './pages/Consultation';
import ProtectedRoute from './components/ProtectedRoute';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Toaster position="top-right" />
            
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify-otp" element={<VerifyOTP />} />
              <Route path="/service/:serviceId" element={
                <>
                  <Header />
                  <ServiceDetail />
                  <Footer />
                </>
              } />
              <Route path="/consultation" element={
                <ProtectedRoute>
                  <Header />
                  <Consultation />
                  <Footer />
                </ProtectedRoute>
              } />
              <Route path="/" element={
                <>
                  <Header />
                  <HomePage />
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;