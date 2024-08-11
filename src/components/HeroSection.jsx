// import React from 'react'
// import heroimg from '../assets/images/physiotherapy.png'

// const HeroSection = () => {
//   return (
//     <div className='min-h-screen relative '>
      
//       <div className='herodesign relative h-[800px] lg:-left-40 w-[300px] rounded-3xl -z-20  bg-primary rotate-45  overflow-hidden -top-60'></div>
//       <div className='flex flex-col lg:flex-row justify-center items-center absolute  inset-0 '>
//         <div className='flex flex-col justify-center items-center w-full '>
//           <h1 className='text-3xl text-center font-bold'>Welcome to ChanRe Physiotherapy</h1>
//           <p className='lg:px-24 mt-6 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis ex fugit voluptates quidem. </p>
//           <button className='lg:bg-primary bg-secondary mt-10 px-4 py-2 rounded-3xl text-white'>Book an Appointment</button>
//         </div>
//         <div className='p-6'>
//           <img src={heroimg} alt="Physiotherapy " className='w-[80%] mx-auto lg:mx-0 object-cover' />
//         </div>
//       </div>
//     </div>

//   )
// }

// export default HeroSection

import React from 'react';
import heroimg from '../assets/images/physiotherapy.png';

const HeroSection = () => {
  return (
    <div className='h-[700px] relative overflow-hidden'>
      <div className='herodesign relative h-[800px] -left-96 lg:-left-40 w-[300px] rounded-3xl -z-20  bg-primary rotate-45  overflow-hidden -top-48 lg:-top-60'></div>
      <div className='herodesign absolute -bottom-60 -right-96 lg:-right-44 h-[800px] w-[300px] rounded-3xl -z-20 bg-primary rotate-45 overflow-hidden'></div>
      <div className='flex flex-col lg:flex-row justify-center items-center absolute inset-0 mt-6'>
        <div className='flex flex-col justify-center items-center w-full mt-24 lg:mt-0'>
          <h1 className='text-2xl lg:text-4xl text-center font-bold'>Welcome to ChanRe Physiotherapy</h1>
          <p className='lg:px-24 mt-6 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis ex fugit voluptates quidem.</p>
          <div className='flex justify-center items-center gap-4'>
          <button className='bg-primary hover:bg-secondary mt-10 px-4 py-2 rounded-3xl text-white'>Appointment</button>
          <button className='hover:bg-primary bg-secondary mt-10 px-4 py-2 rounded-3xl text-white'>About Us</button>
          </div>
        </div>
        <div className='p-6'>
          <img src={heroimg} alt="Physiotherapy" className=' w-[80%] mx-auto lg:mx-0 object-cover' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
