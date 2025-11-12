import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutPage from './pages/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
  <Homepage />
  <AboutPage />
  <Contact />
      <Footer />
    </div>
  );
}

export default App;
