import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
