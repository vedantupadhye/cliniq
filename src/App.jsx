import React from 'react';
import { Navbar } from './components/Navbar';
import hero from './assets/hero.png';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col-reverse lg:flex-row lg:h-screen">
        {/* Text Section */}
        <div className="w-full lg:w-2/5 lg:px-10 lg:flex flex-col justify-center items-start">
          <div className="text-center lg:text-left mt-10 lg:mt-0">
            <div className="flex flex-col items-start">
              <h1 className="title text-green-600 font-bold lg:mt-4 text-4xl lg:text-7xl mb-6 lg:mb-6">
                POWERING
              </h1>
              <h1 className="title text-green-600 font-bold text-4xl lg:text-7xl mb-6 lg:mb-6">
                DEEPER
              </h1>
              <h1 className="title text-green-600 font-bold text-4xl lg:text-7xl mb-6 lg:mb-6">
                UNDERSTANDING
              </h1>
              <h1 className="title text-green-600 font-bold text-4xl lg:text-7xl mb-6 lg:mb-6">
                IN HEALTHCARE
              </h1>
              <p className="desc text-gray-700 font-semibold lg:w-3/4 mb-6 lg:mb-20">
                The most trusted AI platform for clinical conversations—integrated directly inside Epic.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-3/5 relative overflow-hidden lg:pr-10">
          <img
            src={hero}
            alt="Background"
            className="img zoom-animation lg:float-right"
          />
        </div>
      </div>
    </main>
  );
}

export default App;









