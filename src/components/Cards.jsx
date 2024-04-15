import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../public/Group.png';

const Cards = () => {
  // Dummy data for cards
  const cardData = [
    { id: 1, 
    image: 'Group.png', 
    description: 'Reimagining Health care by bridging the gap between Patient, Payor and Provider , thus making the health care systems more Affordable , Accessible and Interoperable' },
    { id: 2, image: 'Group.png', description: 'Reimagining Health care by bridging the gap between Patient, Payor and Provider , thus making the health care systems more Affordable , Accessible and Interoperable' },
    { id: 3, image: 'Group.png', description: 'Reimagining Health care by bridging the gap between Patient, Payor and Provider , thus making the health care systems more Affordable , Accessible and Interoperable' },
    { id: 4, image: 'Group.png', description: 'Reimagining Health care by bridging the gap between Patient, Payor and Provider , thus making the health care systems more Affordable , Accessible and Interoperable' },
    { id: 5, image: 'Group.png', description: 'Reimagining Health care by bridging the gap between Patient, Payor and Provider , thus making the health care systems more Affordable , Accessible and Interoperable' },
  ];

  // Responsive settings for the carousel
  const responsiveSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2, // Display two cards at a time on desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Display one card at a time on tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Display one card at a time on mobile devices
    },
  };

  return (
    <div className="flex mt-28">
      {/* Big blue box with text */}
      <div className="w-2/5 bg-blue-600 text-white p-8 px-12 mr-8 rounded-3xl">
        <h2 className="text-4xl mt-24 font-bold mb-4">Building Digital HealthCare For Bharat</h2>
        <p className='text-lg'>Reimagining Health care by bridging the gap between Patient, Payor and Provider , thus making the health care systems more Affordable , Accessible and Interoperable</p>
      </div>
      {/* Cards */}
      <div className="w-1/2 p-8 ">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          responsive={responsiveSettings}
          slidesToSlide={1}
          swipeable
        >
          {cardData.map(card => (
            <div key={card.id} className="bg-white rounded-lg shadow-md p-4 mx-4 mb-4">
              <img src={card.image} alt={`Card ${card.id}`} className="w-full h-60 object-cover mb-4" />
              <p>{card.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Cards;













// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import image1 from '../../public/Group.png';

// const Cards = () => {
//   // Dummy data for cards
//   const cardData = [
//     { id: 1, 
//     image: 'Group.png', 
//     description: 'Reimagining Health care by bridging the gap between Patient, Payor and Provider , thus making the health care systems more Affordable , Accessible and Interoperable' },
//     { id: 2, image: 'image2.jpg', description: 'Description for card 2' },
//     { id: 3, image: 'image3.jpg', description: 'Description for card 3' },
//     { id: 4, image: 'image4.jpg', description: 'Description for card 4' },
//     { id: 5, image: 'image5.jpg', description: 'Description for card 5' },
//   ];

//   return (
//     <div className="flex">
//       {/* Big blue box with text */}
//       <div className="w-2/5 bg-blue-600 text-white p-8  rounded-3xl">
//         <h2 className="text-4xl mt-5 font-bold mb-4">Building Digital HealthCare For Bharat</h2>
//         <p className='text-lg'>Reimagining Health care by bridging the gap between Patient, Payor and Provider , thus making the health care systems more Affordable , Accessible and Interoperable</p>
//       </div>
//       {/* Cards */}
//       <div className="w-1/2 p-8">
//         <Carousel
//           additionalTransfrom={0}
//           arrows
//           autoPlaySpeed={3000}
//           centerMode={false}
//           className=""
//           containerClass="container"
//           dotListClass=""
//           draggable
//           focusOnSelect={false}
//           infinite
//           itemClass=""
//           keyBoardControl
//           minimumTouchDrag={80}
//           renderButtonGroupOutside={false}
//           renderDotsOutside={false}
//           responsive={{
//             desktop: {
//               breakpoint: {
//                 max: 3000,
//                 min: 1024,
//               },
//               items: 1,
//             },
//             mobile: {
//               breakpoint: {
//                 max: 464,
//                 min: 0,
//               },
//               items: 1,
//             },
//             tablet: {
//               breakpoint: {
//                 max: 1024,
//                 min: 464,
//               },
//               items: 1,
//             },
//           }}
//           showDots={false}
//           sliderClass=""
//           slidesToSlide={1}
//           swipeable
//         >
//           {cardData.map(card => (
//             <div key={card.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
//               <img src={card.image} alt={`Card ${card.id}`} className="w-full h-60 object-cover mb-4" />
//               <p>{card.description}</p>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Cards;
