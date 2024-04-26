import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white rounded-lg shadow-md mt-44 overflow-hidden flex flex-col md:flex-row justify-between my-8 mx-4 md:mx-12">
      <div className="md:w-1/2 mt-12 pr-4 py-8 mx-8">
        <h2 className="text-4xl font-bold mb-4">
          Together we can create a health care system that empowers vibrant health
        </h2>
        <p className="text-lg mb-4">
          Join Us on Our Journey We are driven by the vision of an Interoperable, Affordable and Accessible Health Care for Bharat. If you share our passion for redefining healthcare and are eager to make a significant impact, let's connect and advance healthcare together.
        </p>
      </div>
      <div className="md:w-1/2 pl-12 py-8">
        <div className="border border-gray-300 rounded-lg p-4">
          
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="Your Email" />
              </div> 
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Your Name" />
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                  City
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-city" type="text" placeholder="Your City" />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Contact Us
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;





// Together we can create a health care system that empowers vibrant health
// Join Us on Our Journey We are driven by the vision of a Interoperable, Affordable and Accessible Health Care for Bharat If you share our passion for redefining healthcare and are eager to make a significant impact, let's connect and advance healthcare together.




// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-blue-500 my-32 py-16 h-80">
//       <div className="container text-center justify-center px-56  ">
//         <h2 className="text-white text-4xl font-bold mb-4">Together we can create a health care system that empowers vibrant health</h2>
//         <button className="bg-white text-blue-500 px-6 mt-3 py-2 hover:bg-blue-200 transition duration-300">Contact Us</button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
