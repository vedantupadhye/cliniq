import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is CliniQ360?',
      answer: 'For health care industry - We are a neo OS layer that will help each health care facility to be 100 Digital and Interoperable For a citizen :- We are building integrated health care and financial products to provide a seamless hospital experience.'
    }, 
    {
      question: 'What is ABDM ?',
      answer: 'Launched by the Government of India, the Ayushman Bharat Digital Mission aims to create a digital health infrastructure for the country. Its objectives include the establishment of digital health records for all citizens, facilitation of interoperable medical records, and provision of a wide array of health services. The mission is designed to support a unified health interface, ensuring that medical data is seamlessly accessible across different healthcare providers and to the individuals themselves, subject to their consent'
    },
    {
      question: 'What is ABHA ID ?',
      answer: 'The ABHA ID, formerly known as the Health ID, is a unique 14-digit number generated for individuals who wish to participate in ABDM. This ID acts as a key to access and manage ones digital health records. It enables the linking and sharing of health information (with consent) across different healthcare providers, thus ensuring that ones health history can be accessed in a unified manner whenever required. The ABHA ID ensures privacy and security of health data and empowers users to control who can access their health information'
    },
    {
      question: 'What is PRM ?',
      answer: 'We are building a digital first customer like experience that was missing in health care for the patients in our partner clinics. CliniQ360 is an integrated CRM for the Hospitals hence Patient Relation Management.'
    },
    {
      question: 'What is connected Health care  ?',
      answer: 'Connected healthcare refers to a model of health management that uses technology to provide healthcare services remotely and to streamline the information flow among patients, healthcare providers, and payers. Its part of a broader concept known as digital health or e-health. Here are the key components and principles behind connected healthcare, at CliniQ360 our mission is to build patient centric connected health care for Bharat.'
    },
    {
      question: 'How do I participate ?',
      answer: 'As a health care profession, please reach out to us and help us digitize and revolutionize your clinic. As a citizen, take benefits of your Digital public good like ABHA and start the journey towards collective health care equity for all.'
    }
  ];

  return (
    <div className="container px-16 mt-32">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 gap-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border p-2">
            <div className="cursor-pointer flex justify-between py-2" onClick={() => toggleAccordion(index)}>
              <p className="font-semibold">{faq.question}</p>
              <svg
                className={`w-6 h-6 ${openIndex === index ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;






// import React, { useState } from 'react';

// const FAQ = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   const faqData = [
//     {
//       question: 'Question 1?',
//       answer: 'Reimagining Health care by bridging the gap between PatientPayor and Provider thus making healthcare systems more Affordable Accessible and interoperable'
//     }, 
//     {
//       question: 'Question 2?',
//       answer: 'Answer to Question 2.'
//     },
//     {
//       question: 'Question 3?',
//       answer: 'Answer to Question 3.'
//     },
//     {
//       question: 'Question 4?',
//       answer: 'Answer to Question 4.'
//     },
//     {
//       question: 'Question 5?',
//       answer: 'Answer to Question 5.'
//     },
//     {
//       question: 'Question 6?',
//       answer: 'Answer to Question 6.'
//     }
//   ];

//   return (
//     <div className="container px-16 mt-32">
//       <h1 className="text-3xl font-bold mb-5">Frequently Asked Questions</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {faqData.map((faq, index) => (
//           <div key={index} className="border p-4">
//             <div className="cursor-pointer flex justify-between" onClick={toggleAccordion}>
//               <p className="font-semibold">{faq.question}</p>
//               <svg
//                 className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="6 9 12 15 18 9" />
//               </svg>
//             </div>
//             {isOpen && (
//               <p className="mt-2 text-gray-600">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;
