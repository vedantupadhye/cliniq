// scrool Effect
import React, { useEffect } from 'react';
import { Fade, Zoom, Slide } from 'react-reveal';

const Information = () => {
  useEffect(() => {

    return () => {

    };
  }, []);

  return (
    <div className="bg-blue-500 py-10 md:py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="overflow-x-auto md:overflow-hidden">
          <div className="flex flex-no-wrap">
            {/* Card 1 */}
            <Fade>
              <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium mb-4 md:mb-0 mr-4 md:mr-10" style={{ minWidth: '280px', maxWidth: '90vw' }}>
                <p>Rising Healthcare Costs - Indians expended around ₹86,000 crore on healthcare expenses in 2022 </p>
              </div>
            </Fade>
            {/* Card 2 */}
            <Zoom>
              <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium mb-4 md:mb-0 mr-4 md:mr-10" style={{ minWidth: '280px', maxWidth: '90vw' }}>
                <p>One of highest Out of Pocket Expenditure of around 47%</p>
              </div>
            </Zoom>
            {/* Card 3 */}
            <Slide left>
              <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium mb-4 md:mb-0 mr-4 md:mr-10" style={{ minWidth: '280px', maxWidth: '90vw' }}>
                <p>Underpenetrated Health insurance with premiums rising (40%) after Covid</p>
              </div>
            </Slide>
            {/* Card 4 */}
            <Slide right>
              <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium mb-4 md:mb-0 mr-4 md:mr-10" style={{ minWidth: '280px', maxWidth: '90vw' }}>
                <p>Skewed Doctor to patient ratio of (1:900), overburdened system</p>
              </div>
            </Slide>
            {/* Card 5 */}
            <Fade>
              <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium mb-4 md:mb-0 mr-4 md:mr-10" style={{ minWidth: '280px', maxWidth: '90vw' }}>
                <p>90% of health records are manual, without any record keeping</p>
              </div>
            </Fade>
            {/* Card 6 */}
            <Zoom>
              <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium mb-4 md:mb-0" style={{ minWidth: '280px', maxWidth: '90vw' }}>
                <p>40% of the providers time is spent on administrative work</p>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;










// approch with smaller text

// import React, { useEffect } from 'react';
// import { Fade, Zoom, Slide } from 'react-reveal';

// const Information = () => {
//   useEffect(() => {

//     return () => {

//     };
//   }, []);

//   return (
//     <div className="bg-blue-500 py-10 md:py-20 px-4 md:px-8">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mx-4 md:mx-16">
//           {/* Card 1 */}
//           <Fade>
//             <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium">
//               <p>Rising Healthcare Costs - Indians expended around ₹86,000 crore on healthcare expenses in 2022 </p>
//             </div>
//           </Fade>
//           {/* Card 2 */}
//           <Zoom>
//             <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium">
//               <p>One of highest Out of Pocket Expenditure of around 47%</p>
//             </div>
//           </Zoom>
//           {/* Card 3 */}
//           <Slide left>
//             <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium">
//               <p>Underpenetrated Health insurance with premiums rising (40%) after Covid</p>
//             </div>
//           </Slide>
//           {/* Card 4 */}
//           <Slide right>
//             <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium">
//               <p>Skewed Doctor to patient ratio of (1:900), overburdened system</p>
//             </div>
//           </Slide>
//           {/* Card 5 */}
//           <Fade>
//             <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium">
//               <p>90% of health records are manual, without any record keeping</p>
//             </div>
//           </Fade>
//           {/* Card 6 */}
//           <Zoom>
//             <div className="bg-white rounded-lg py-8 px-4 md:py-12 md:px-8 font-medium">
//               <p>40% of the providers time is spent on administrative work</p>
//             </div>
//           </Zoom>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Information;











// import React, { useEffect } from 'react';
// import { Fade, Zoom, Slide } from 'react-reveal';

// const Information = () => {
//   useEffect(() => {

//     return () => {

//     };
//   }, []);

//   return (
//     <div className="bg-blue-500 py-20 px-8">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-16">
//           {/* Card 1 */}
//           <Fade>
//             <div className="bg-white rounded-lg py-12 px-8 font-medium">
//               <p>Rising Healthcare Costs - Indians expended around ₹86,000 crore on healthcare expenses in 2022 </p>
//             </div>
//           </Fade>
//           {/* Card 2 */}
//           <Zoom>
//             <div className="bg-white rounded-lg py-12 px-8 font-medium">
//               <p>One of highest Out of Pocket Expenditure of around 47%</p>
//             </div>
//           </Zoom>
//           {/* Card 3 */}
//           <Slide left>
//             <div className="bg-white rounded-lg py-12 px-8 font-medium">
//               <p>Underpenetrated Health insurance with premiums rising (40%) after Covid</p>
//             </div>
//           </Slide>
//           {/* Card 4 */}
//           <Slide right>
//             <div className="bg-white rounded-lg py-12 px-8 font-medium">
//               <p>Skewed Doctor to patient ratio of (1:900), overburdened system</p>
//             </div>
//           </Slide>
//           {/* Card 5 */}
//           <Fade>
//             <div className="bg-white rounded-lg py-12 px-8 font-medium">
//               <p>90% of health records are manual, without any record keeping</p>
//             </div>
//           </Fade>
//           {/* Card 6 */}
//           <Zoom>
//             <div className="bg-white rounded-lg py-12 px-8 font-medium">
//               <p>40% of the providers time is spent on administrative work</p>
//             </div>
//           </Zoom>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Information;












// import React from 'react';

// const Information = () => {
//   return (
//     <main className='flex flex-col bg-slate-200'>
//         <h1 className='mt-8 ml-4 text-4xl'>Header</h1>
//       {/* Cards */}
//       <div className='flex mx-10'>
//         {/* Card 1 */}
//         <div className='mt-20 mx-10'>
//           <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl'>
//             <a href='#'>
//               <img className='rounded-t-lg' src='' alt='' />
//             </a>
//             <div className='p-5'>
//               <a href='#'>
//                 <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>Hospital Information Management System</h5>
//               </a>
//               <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//               <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
//                 Read more
//                 <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
//                   <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className='mt-20 mx-10'>
//           <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl'>
//             <a href='#'>
//               <img className='rounded-t-lg' src='' alt='' />
//             </a>
//             <div className='p-5'>
//               <a href='#'>
//                 <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>Hospital Information Management System</h5>
//               </a>
//               <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//               <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
//                 Read more
//                 <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
//                   <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className='mt-20 mx-10'>
//           <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl'>
//             <a href='#'>
//               <img className='rounded-t-lg' src='' alt='' />
//             </a>
//             <div className='p-5'>
//               <a href='#'>
//                 <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>Hospital Information Management System</h5>
//               </a>
//               <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//               <a href='#' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
//                 Read more
//                 <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
//                   <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

// <div className='bg-white mt-32'>
//       <div className='mt-20 mx-20 p-6 rounded-lg'>
//   <div className='h-56 bg-blue-500 rounded-lg text-white flex items-center justify-around'>
//     {/* Partition 1 */}
//     <div className='flex-1 mr-2 border-r border-white'>
//       <div className='mb-6 ml-2'>
//         <h2 className='text-4xl font-bold mt-8'>50%</h2>
//         <p className='mt-6 mr-3'>Reimagining Health care by bridging the gap between Patient, Payor and Provider thus making healthcare systems more Affordable</p>
//       </div>
//     </div>
//     {/* Partition 2 */}
//     <div className='flex-1 mr-2 border-r border-white'>
//       <div className='mb-6 ml-2'>
//         <h2 className='text-4xl font-bold mt-8'>50%</h2>
//         <p className='mt-6 mr-3'>Reimagining Health care by bridging the gap between Patient, Payor and Provider thus making healthcare systems more Affordable</p>
//       </div>
//     </div>
//     {/* Partition 3 */}
//     <div className='flex-1 mr-2 border-r border-white'>
//       <div className='mb-6 ml-2'>
//         <h2 className='text-4xl font-bold mt-8'>50%</h2>
//         <p className='mt-6 mr-3'>Reimagining Health care by bridging the gap between Patient, Payor and Provider thus making healthcare systems more Affordable</p>
//       </div>
//     </div>
//     {/* Partition 4 */}
//     <div className='flex-1'>
//       <div className='mb-6 ml-2'>
//         <h2 className='text-4xl font-bold mt-8'>50%</h2>
//         <p className='mt-6 mr-3'>Reimagining Health care by bridging the gap between Patient, Payor and Provider thus making healthcare systems more Affordable</p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>

//     </main>
//   );
// };

// export default Information;
