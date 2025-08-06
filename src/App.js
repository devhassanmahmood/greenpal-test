import React from "react";
import "./App.css";
import Header from "./components/Header";
import AsSeenIn from "./components/AsSeenIn";
import LawnProsSection from "./components/LawnProsSection";
import HowGreenPalWorks from "./components/HowGreenPalWorks";
import TopRatedProviders from "./components/TopRatedProviders";
import Reviews from "./components/Reviews";
import About from "./components/About";
import PromotionalSection from "./components/PromotionalSection";
import CostCalculator from "./components/CostCalculator";
import ServiceProcess from "./components/ServiceProcess";
import Footer from "./components/Footer";
import RecentLawns from "./components/RecentLawns";
import GreenPalInfo from "./components/GreenPalInfo";
import ServiceProviders from "./components/ServiceProviders";
import HowItWorks from "./components/HowItWorks";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="App">
      <Header />
      <AsSeenIn />
      <LawnProsSection />
      <HowGreenPalWorks />
      <TopRatedProviders />
      <CostCalculator />
      <ServiceProcess />
      <RecentLawns />
      <GreenPalInfo />
      <Leaderboard />
      <About />
      <Reviews />
      <PromotionalSection />
      <Footer />
    </div>
  );
}

export default App;
