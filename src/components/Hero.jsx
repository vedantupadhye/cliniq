import React from 'react';
import heroimg from '../../public/heroimg.png';

const Hero = () => {
  return (
    <main>
      <div className="min-h-screen flex flex-col-reverse md:flex-row">
        <div className="max-w-4xl my-auto px-4 sm:px-6 lg:px-8 text-center md:text-left md:ml-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
            Building Digital Health Care For Bharat
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl my-4">
            Reimagining Health care by bridging the gap between Patient, Payor and Provider thus
            making health care systems more Affordable, Accessible and Interoperable
          </p>
          <button className="px-7 py-3 bg-blue-600 rounded hover:bg-blue-300 font-semibold">
            Contact Us
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={heroimg} alt="Mission" className="w-80 md:w-96 h-auto mt-8 md:mt-0 ml-52" />
        </div>
      </div>
    </main>
  );
};

export default Hero;




















// import React from 'react';
// import heroimg from '../../public/heroimg.png';
// const Hero = () => {
//   return (
//     <main>
//       <div className="min-h-screen flex ">
//         <div className="max-w-4xl my-auto px-4 sm:px-6 lg:px-8 ml-4">
//           <div className="text-left">
//             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold  mb-4">
//               Building Digital Health Care For Bharat
//             </h1>
//             <p className="text-lg sm:text-xl lg:text-2xl  my-4">
//               Reimagining Health care by bridging the gap between Patient, Payor and Provider thus
//               making health care systems more Affordable, Accessible and Interoperable
//             </p>
//             <button className="px-7 py-3 bg-blue-600 rounded hover:bg-blue-300 font-semibold">
//               Contact Us
//             </button>
//           </div>
//         </div>
//         <div className='ml-52'>
//         <img src={heroimg} alt="Mission" className=" w-96 h-screen mr-40 " />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Hero;


