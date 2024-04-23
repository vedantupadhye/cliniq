import React from 'react';

const Ecosystem = () => {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center bg-gray-200 ">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Side */}
        <div className="py-8 px-8 rounded-lg lg:w-1/2 mr-8">
          <h2 className="text-5xl font-bold mb-4">The 3-P problem of Health Care Ecosystem</h2>
          <p className="text-xl mb-4">To make healthcare data interoperability 100x by bridging the gap between payor provider and patient making care accessible , transparent and seamless for patient, provider and payor.</p>
        </div>
        {/* Right Side */}
        <div className="bg-gray-800 rounded-xl shadow-md py-12 px-20 lg:w-2/5">
          <div className="border border-white rounded-lg px-6 py-4">
            <nav>
              <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <li>
                  <a href="#" className="text-white font-bold text-lg relative mr-12 ">
                    Provider
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-25 hover:px-12 hover:py-4 transition duration-300"></div>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-bold text-lg relative mr-12">
                    Payor
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-25 hover:px-12 hover:py-4 transition duration-300"></div>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-bold text-lg relative mr-12">
                    Patient
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-25 hover:px-12 hover:py-4 transition duration-300"></div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <p className="text-white text-2xl font-bold mt-8">Building Digital Healthcare For Bharat</p>
          <ul className="text-white text-lg list-disc pl-6 mt-4">
            <li>Lack of Technology</li>
            <li>Administrative Load</li>
            <li>Insufficient Cash Flow</li>
            <li>Lack of Longitudinal Records</li>
            <li>Lack of Trust</li>
            <li>Sack Care Model</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
