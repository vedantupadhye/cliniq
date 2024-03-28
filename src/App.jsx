import React from 'react';
import { Navbar } from './components/Navbar';
import hero from './assets/hero.png';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <div className="flex h-screen">
        {/* Text Section */}
        <div className="w-2/5 flex flex-col justify-center items-center">
    <div className="text-center px-10">
      <div className="flex flex-col items-start">
        <h1 className="title text-green-600 font-bold mt-4">POWERING</h1>
        <h1 className="title text-green-600 font-bold">DEEPER</h1>
        <h1 className="title text-green-600 font-bold">UNDERSTANDING</h1>
        <h1 className="title text-green-600 font-bold">IN HEALTHCARE</h1>
        <p className="desc text-gray-700 font-semibold mt-4 ">The most trusted AI platform for clinical conversations—integrated directly inside Epic.</p>
      </div>
    </div>
  </div>
  
          {/* Image Section */} 



        {/* Picture Section */}
        <div className="w-3/5 relative overflow-hidden">
          <img src={hero} alt="Background" className="img zoom-animation" />
        </div>
      </div>
    </main>
  );
}

export default App;





