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
import Chatbot from './components/Chatbot';
import ServiceDetail from './pages/ServiceDetail';
import Consultation from './pages/Consultation';
import Login from './pages/Login';
import Register from './pages/Register';
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
              {/* Authentication Pages */}
              <Route
                path="/login"
                element={
                  <>
                    <Header />
                    <Login />
                    <Footer />
                  </>
                }
              />
              
              <Route
                path="/register"
                element={
                  <>
                    <Header />
                    <Register />
                    <Footer />
                  </>
                }
              />

              {/* Service Detail Page */}
              <Route
                path="/service/:serviceId"
                element={
                  <>
                    <Header />
                    <ServiceDetail />
                    <Footer />
                  </>
                }
              />

              {/* Consultation Page */}
              <Route
                path="/consultation"
                element={
                  <ProtectedRoute>
                    <Header />
                    <Consultation />
                    <Footer />
                  </ProtectedRoute>
                }
              />

              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <HomePage />
                    <Footer />
                  </>
                }
              />
            </Routes>
            
            {/* Chatbot - Available on all pages */}
            <Chatbot />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;