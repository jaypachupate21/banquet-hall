
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

const App=()=>{
  return(
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<HeroSection/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/booking" element={<BookingForm/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}
export default App;
