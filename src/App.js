import React from 'react';
import './App.css';
import Header from './components/Header';
import Reviews from './components/Reviews';
import ServiceProviders from './components/ServiceProviders';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Reviews />
      <ServiceProviders />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
