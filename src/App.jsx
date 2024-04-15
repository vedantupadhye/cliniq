import React from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Information from './components/Information';
import GigCard from './components/GigCard';
import Mission from './components/Mission';
import FAQ from './components/FAQ';
import Cards from './components/Cards';
import Work from './components/Work';
import Footer from './components/Footer';


function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GigCard />
      <Information />
      <Work />
      <Mission />
      <Cards />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;









