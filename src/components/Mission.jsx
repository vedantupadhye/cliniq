import React from 'react';
import missionImage from '../../public/Frame.png';
import Fade from 'react-reveal/Fade';

const Mission = () => {
  return (
    <main className='w-screen bg-gray-600 py-32'>
    <div className="container mx-auto">
      <div className="bg-white rounded-lg shadow-md mx-36">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between ">
          <div className="md:w-1/2">
            <Fade left> 
              <div className="mb-4 ">
                <h2 className="text-4xl font-bold mb-6 pl-32 mt-20">Mission & Vision</h2>
                <p className="mb-4 ml-32 ">To make healthcare data interoperability 100x by bridging 
                the gap between payor provider and patient making care accessible , transparent 
                and seamless for patient, provider and payor</p>
              </div>
            </Fade>
          </div>
          {/* Mission Image */}
          <div className="md:w-1/2 md:ml-48">
            <Fade right> {/* Add animation here */}
              <img src={missionImage} alt="Mission" className="rounded-lg mb-5 w-full md:w-72" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Mission;





// import React from 'react';
// import missionImage from '../../public/Frame.png';

// const Mission = () => {
//   return (
//     <div className="container mx-auto px-24 ">
//     <div className="bg-white rounded-lg shadow-md p-8 ">
//       <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between ">
//         {/* Mission and Vision Text */}
//         <div className="md:w-1/2">
//           <div className="mb-4 ">
//             <h2 className="text-4xl font-bold mb-6 pl-32 mt-20">Mission & Vision</h2>
//             <p className="mb-4 ml-32 ">To make healthcare data interoperability 100x by bridging 
//             the gap between payor provider and patient making care accessible , transparent 
//             and seamless for patient, provider and payor</p>
//           </div>
//         </div>
//         {/* Mission Image */}
//         <div className="md:w-1/2 md:ml-64">
//           <img src={missionImage} alt="Mission" className="rounded-lg mb-5 shadow-md w-full md:w-96" />
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Mission;

