// import React from 'react'

// export const Navbar = () => {
//   return (
// <nav className="bg-transparent py-4 px-4">
//       <div className="container mx-auto flex items-center justify-between">
  
//       <div className="flex items-center">
//           <a href="#" className="text-black font-bold text-2xl">CLINIQ360</a>
//         </div>
//         <div className="hidden md:flex items-center justify-end space-x-4">
//           <a href="#" className="text-black">Home</a>
//           <a href="#" className="text-black">About</a>
//           <a href="#" className="text-black">Services</a>
//           <a href="#" className="text-black">Contact</a>
//           <button className="bg-orange-600 text-white px-4 py-2 rounded">Login</button>
//         </div>
//       </div>
//     </nav>
//   )
// }




// import React, { useState } from 'react';
// import logo from '../../public/Vector.png';
// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-transparent py-4 px-4 ">

//       <div className="container mx-auto flex items-center justify-between ">
     
//         <div className="flex items-center ">
//           <a href="#" className="text-black font-bold text-2xl">
//             <img src={logo} alt="Mission"></img>
//           </a>
//         </div>


//         {/* Navigation Links for Laptop */}
//         <div className="hidden md:flex md:items-center md:justify-between">
//           <a href="#" className="text-black ml-5 relative text-xl w-fit block after:block after:content-['']
//            after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Home</a>
//           <a href="#" className="text-black ml-5 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About</a>
//           <a href="#" className="text-black ml-5 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Services</a>
//           <a href="#" className="text-black ml-5 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact</a>
//           <button className="bg-orange-600 text-white px-4 py-2 rounded ml-5">Login</button>
//         </div>

        
//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden">
//           <button className="text-black" onClick={toggleMenu}>
//             {isOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 transition duration-300 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 transition duration-300 transform rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//       {/* Mobile Navigation Links */}
//       <div className={`container mx-auto md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="bg-gray-100 py-4 px-4">
//           <a href="#" className="text-black hover:text-gray-800 py-2 block text-center">Home</a>
//           <a href="#" className="text-black hover:text-gray-800 py-2 block text-center">About</a>
//           <a href="#" className="text-black hover:text-gray-800 py-2 block text-center">Services</a>
//           <a href="#" className="text-black hover:text-gray-800 py-2 block text-center">Contact</a>
//           <button className="bg-orange-600 text-white px-4 py-2 rounded mt-4 block mx-auto">Login</button>
//         </div>
//       </div>
//     </nav>
//   );
// };








import React, { useState } from 'react';
import logo from '../../public/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" py-4 px-4">

      <div className="container mx-auto flex items-center justify-between ">
     
        <div className="flex items-center ">
          <a href="#" className="text-black ml-8 font-bold text-2xl">
            <img src={logo} alt="Mission"></img>
          </a>
        </div>


        {/* Navigation Links for Laptop */}
        <div className="  hidden md:flex md:items-center md:justify-between">
          <a href="#" className=" ml-5 relative text-xl w-fit block after:block after:content-['']
           after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Home</a>
          <a href="#" className=" ml-5 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About</a>
          <a href="#" className=" ml-5 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Services</a>
          <a href="#" className=" ml-5 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact</a>
          <button className="bg-orange-600 text-white px-4 py-2 rounded ml-5">Login</button>
        </div>

        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button className="" onClick={toggleMenu}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 transition duration-300 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 transition duration-300 transform rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Links */}
      <div className={`container mx-auto md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gray-100 py-4 px-4">
          <a href="#" className=" hover:text-gray-800 py-2 block text-center">Home</a>
          <a href="#" className=" hover:text-gray-800 py-2 block text-center">About</a>
          <a href="#" className=" hover:text-gray-800 py-2 block text-center">Services</a>
          <a href="#" className=" hover:text-gray-800 py-2 block text-center">Contact</a>
          <button className="bg-orange-600 text-white px-4 py-2 rounded mt-4 block mx-auto">Login</button>
        </div>
      </div>
    </nav>
  );
};
