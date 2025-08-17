import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import Consultation from './pages/Consultation';

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
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Toaster position="top-right" />

          <Routes>
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
                <>
                  <Header />
                  <Consultation />
                  <Footer />
                </>
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
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
