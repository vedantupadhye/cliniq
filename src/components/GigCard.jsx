import React from 'react';
import phWalletImage from '../../public/ph_wallet.png';
import money from '../../public/money.png';
import bag from '../../public/bag.png';

const GigCard = () => {
  return (
    <main className='bg-white mt-12'>
      {/* Big Card */}
      <div className="flex justify-center">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-2xl w-full md:w-screen">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-2 text-center md:text-left">
            CliniQ360 Suite for Connected Health Care
          </h2>
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="flex-1 md:relative flex flex-col items-center md:items-start md:flex-row md:ml-0 md:mr-8">
              <div className="bg-gray-300 w-3/4 md:w-1 h-1 md:h-3/4 mb-4 md:mb-0 md:mr-4"></div>
              <nav className="flex flex-col items-center md:items-start">
                <a href="#" className="mt-4 md:mt-0 text-black relative text-lg md:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                  <img src={phWalletImage} alt="Provider" className="h-8 w-8 mb-1 md:mr-2" />
                  <span className='mt-2 md:mt-0'>Hospital Information Management system</span>
                </a>
                <a href="#" className="mt-4 md:mt-4 text-black relative text-lg md:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                  <img src={bag} alt="Patient" className="h-8 w-8 mb-1 md:mr-2" />
                  <span className='mt-2 md:mt-0'>Hospital Information Management system</span>
                </a>
                <a href="#" className="mt-4 md:mt-4 text-black relative text-lg md:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                  <img src={money} alt="Payor" className="h-8 w-8 mb-1 md:mr-2" />
                  <span className='mt-2 md:mt-0'>Hospital Information Management system</span>
                </a>
              </nav>
            </div>
            
            {/* Right Section */}
            <div className="flex-1 md:ml-0 md:ml-8 mt-4 md:mt-0">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl">
                <h1 className='font-semibold text-lg md:text-xl mb-2'>Health On Demand</h1>
                <p className='mb-4 md:mb-5 text-sm md:text-base'>
                  Immediate access to financial products that enable prompt and personalized
                  medical attention when your patients need it most 
                </p>
                <h1 className='font-semibold text-lg md:text-xl mb-2'>Low cost Solution</h1>
                <p className='mb-4 md:mb-5 text-sm md:text-base'>
                  Economical insurance and credit options designed to lighten the financial load of 
                  healthcare without compromising on quality 
                </p>
                <h1 className='font-semibold text-lg md:text-xl mb-2'>Quickest Turnaround</h1>
                <p className='mb-4 md:mb-0 text-sm md:text-base'>
                  Experience rapid processing and approval of financial assistance to ensure 
                  healthcare keeps pace with life's urgencies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GigCard;
















// import React from 'react';
// import phWalletImage from '../../public/ph_wallet.png';
// import money from '../../public/money.png';
// import bag from '../../public/bag.png';

// const GigCard = () => {
//   return (
//     <main className='bg-white mt-12'>
//       {/* Big Card */}
//       <div className="flex justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-2xl w-full md:w-screen">
//           <h2 className="text-4xl font-semibold mb-2 pl-32 pt-12 pb-8">CliniQ360 Suite for Connected Health Care</h2>
//           <div className="flex flex-col md:flex-row">
//             {/* Left Section */}
//             <div className="flex-1 md:relative flex items-start ml-16">
//               <div className="bg-gray-300 w-1 h-3/4 md:h-full mr-5"></div>
//               <nav className="flex flex-col items-center md:items-start pl-4 md:pl-0">
//                 <a href="#" className="mt-4 md:mt-16 text-black relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
//                   <img src={phWalletImage} alt="Provider" className="h-8 w-8 " />
//                   <span className='mt-2 md:mt-4'>Hospital Information Management system</span>
//                 </a>
//                 <a href="#" className="mt-4 md:mt-8 text-black relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
//                   <img src={bag} alt="Patient" className="h-8 w-8 mb-1" />
//                   <span className='mt-2 md:mt-4'>Hospital Information Management system</span>
//                 </a>
//                 <a href="#" className="mt-4 md:mt-8 text-black relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
//                   <img src={money} alt="Payor" className="h-8 w-8 mb-1" />
//                   <span className='mt-2 md:mt-0'>Hospital Information Management system</span>
//                 </a>
//               </nav>
//             </div>
            
//             {/* Right Section */}
//             <div className="flex-1 md:ml-8 mt-8">
//               <div className="bg-white p-6 rounded-lg shadow-2xl">
//                 <h1 className='font-semibold text-xl mb-2'>Health On Demand</h1>
//                 <p className='mb-5'>Immediate access to financial products that enable prompt and personalized<br />medical attention when your patients need it most </p>
//                 <h1 className='font-semibold text-xl mb-2'>Low cost Solution</h1>
//                 <p className='mb-5'>Economical insurance and credit options designed to lighten the financial load of <br />healthcare without compromising on quality </p>
//                 <h1 className='font-semibold text-xl mb-2'>Quickest Turnaround</h1>
//                 <p className='mb-5'>Experience rapid processing and approval of financial assistance to ensure <br />healthcare keeps pace with life's urgencies</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default GigCard;





// import React from 'react';
// import phWalletImage from '../../public/ph_wallet.png'

// const GigCard = () => {
//   return (
//     <main className='bg-white' >
//       <div className="mt-32 ml-8 py-6">
//         <h2 className="text-4xl font-semibold mb-2">CliniQ360 Suite for Connected Health Care</h2>
//       </div>

//       {/* Big Card */}
//       <div className="flex justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-2xl w-screen">
//           <div className="flex">
//             {/* Left Section */}
//             <div className="flex-1 relative">
//               {/* Vertical Navbar */}
//               <nav className="flex flex-col items-center">
//                 <a href="#" className="mt-16 text-black relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
//                   <img src={phWalletImage} alt="Provider" className="h-8 w-8 " />
//                   <span className='mt-4' >Hospital Information Management system</span>
//                 </a>
//                 <a href="#" className="mt-8 text-black relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
//                   <img src={phWalletImage} alt="Patient" className="h-8 w-8 mb-1" />
//                   <span className='mt-4'>Hospital Information Management system</span>
//                 </a>
//                 <a href="#" className="mt-8 text-black relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
//                   <img src={phWalletImage} alt="Payor" className="h-8 w-8 mb-1" />
//                   <span>Hospital Information Management system</span>
//                 </a>
//               </nav>
//               {/* Vertical Line */}
//               <div className="absolute bg-gray-300 w-1 h-full left-36 top-0"></div>
//             </div>
            
//             {/* Right Section */}
//             <div className="flex-1 ml-8 my-6">
//               <div className="bg-white p-6 rounded-lg shadow-2xl">
//                 <h1 className='font-semibold text-xl mb-2'>Health On Demand</h1>
//                 <p className='mb-5'>Immidiate access to financial products that enable prompt and personalized<br></br>
//                 medical attention when your patients need it most </p>
//                 <h1 className='font-semibold text-xl mb-2'>Low cost Solution</h1>
//                 <p className='mb-5'>Econoical insurance and credit options designed to lighten the financial load of <br></br>
//                 healthcare withput compromising on quality </p>
//                 <h1 className='font-semibold text-xl mb-2'>Quickest Turnaround</h1>
//                 <p className='mb-5'>Experience rapid processing and approval of financial assistance to ensure <br></br>
//                 healthcare keeps pace with life's urgencies</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default GigCard;











// import React from 'react';

// const GigCard = () => {
//   return (
//     <main className='bg-gray-200'>
//         <div className="mt-32 ml-8 py-6">
//         <h2 className="text-4xl font-semibold mb-2">Header</h2>
//         <p className="text-gray-700">Reimagining Health care by bridging the gap between Patient, Payor and Provider thus making healthcare systems more Affordable</p>
//       </div>
    
//     <div className="flex flex-col items-center h-screen mt-12">
//       {/* Header */}
      

//       {/* Gig Card */}
//       <div className="bg-white mt-10 p-8 rounded-lg shadow-2xl w-5/6">
//         {/* Navbar */}
//         <nav className="flex mb-6 border-b border-gray-300 pb-4">
//           <a href="#" className="text-black relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Provider</a>
//           <a href="#" className="text-black ml-7 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Patient</a>
//           <a href="#" className="text-black ml-7 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Payor</a>
//         </nav>
        
//         {/* Content */}
//         <div className="flex flex-col md:flex-row mb-12">
//           {/* Text */}
//           <div className="md:w-1/2 mb-6 md:mb-0">
//             <h1 className="text-3xl font-semibold mb-2 mt-6">Building Digital healthcare for Bharat</h1>
//             <ul className="list-disc pl-6 mt-6">
//               <li className="text-gray-700 mb-2">
//                 Hosptal info management system
//               </li>
//               <li className="text-gray-700 mb-2">
//                 Reimagining Healthcare by bridging the gap between Patient and Health infrastructure 
//               </li>
//              <li className="text-gray-700 mb-2">
//               Payor and Provider thus making healthcare systems more Affordable, Accessible and interoperable
//               </li>
//               <li className="text-gray-700 mb-2">
//                 Reimagining Health care by bridging the gap between Patient, Payor and Provider thus making healthcare sysems more Affordable, Accessible and interoperable
//               </li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </div>
//     </main>
//   );
// };

// export default GigCard;

