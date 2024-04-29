import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import Navbar from './components/Navbar/Navbar';
import { PropertyProvider } from './PropertyContext'; 
import About from './components/About/About';
import Error from './components/Error/Error';
const App = () => {
  return (
    <Router>
      <PropertyProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acceuil" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </PropertyProvider>
    </Router>
  );
};

export default App;
