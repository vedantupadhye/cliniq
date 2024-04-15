import React from 'react';

const Hero = () => {
  return (
    <main>
      <div className="min-h-screen flex bg-blue-500">
        <div className="max-w-4xl my-auto px-4 sm:px-6 lg:px-8 ml-4">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
              Building Digital Health Care For Bharat
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white my-4">
              Reimagining Health care by bridging the gap between Patient, Payor and Provider thus
              making health care systems more Affordable, Accessible and Interoperable
            </p>
            <button className="px-7 py-3 bg-white rounded hover:bg-blue-300 font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
