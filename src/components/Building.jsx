import React from 'react';
import phWalletImage from '../../public/ph_wallet.png';
const Building = () => {
  return (
    <div className="bg-gray-200 py-32 flex justify-center items-center px-10">
      <div className="bg-black text-white py-12 px-14 rounded-lg ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-10">
              Building Digital Health Care for Bharat
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              To make healthcare data interoperability 100x by bridging
              the gap between payor provider and patient making care accessible,
              transparent and seamless for patient, provider and payor
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition duration-300">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2 flex flex-col lg:ml-44">
            <div className="flex mb-12">
            <img src={phWalletImage} alt="Patient" className="mr-4" />
              <div className="text-left">
                <span className="text-lg lg:text-xl">
                  Underpenetrated Health Insurance with premiums
                </span>
                <br />
                <span className="text-lg lg:text-xl">
                  rising (40%) after covid
                </span>
              </div>
            </div>
            <div className="flex mb-12">
            <img src={phWalletImage} alt="Patient" className="mr-4" />
              <div className="text-left">
                <span className="text-lg lg:text-xl">
                  Underpenetrated Health Insurance with premiums
                </span>
                <br />
                <span className="text-lg lg:text-xl">
                  rising (40%) after covid
                </span>
              </div>
            </div>
            <div className="flex">
            <img src={phWalletImage} alt="Patient" className="mr-4" />
              <div className="text-left">
                <span className="text-lg lg:text-xl">
                  Underpenetrated Health Insurance with premiums
                </span>
                <br />
                <span className="text-lg lg:text-xl">
                  rising (40%) after covid
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
