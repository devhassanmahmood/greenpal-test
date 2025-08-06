import React from 'react';
import './App.css';
import Header from './components/Header';
import AsSeenIn from './components/AsSeenIn';
import Reviews from './components/Reviews';
import ServiceProviders from './components/ServiceProviders';
import HowItWorks from './components/HowItWorks';
import About from "./components/About";
import PromotionalSection from './components/PromotionalSection';
import CostCalculator from './components/CostCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AsSeenIn />
      <ServiceProviders />
      <HowItWorks />
      <CostCalculator />
      <About />
      <Reviews />
      <PromotionalSection />
      <Footer />
    </div>
  );
}

export default App;
