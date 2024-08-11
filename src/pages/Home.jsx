import React from 'react'
import HeroSection from '../components/HeroSection'
import { FaHeartbeat } from "react-icons/fa";
import { services } from '../Info';
import OurDoctors from '../components/OurDoctors';

const Home = () => {

    return (
        <div>
            <HeroSection />
            <div className='hidden lg:block'>
                <div className='bg-primary flex flex-col lg:flex-row justify-around '>

                    <h2 className=' lg:py-10 text-white'>We are available: 24x7</h2>
                    <h2 className=' lg:py-10 text-white'>Emergency: +91 9876543210</h2>
                    <h2 className=' lg:py-10 text-white'>Email: email@gmail.com</h2>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-semibold text-center py-6'>Our Services</h2>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-4 p-6'>
                {
                    services.map((service, index) => (
                        <div className="card bg-base-100 lg:w-80 shadow-md hover:shadow-2xl transition-all duration-1000 ease-in" key={index}>
                            <FaHeartbeat className='h-24 w-24 p-2 rounded-3xl text-primary mx-auto ' />
                            <div className="card-body">
                                <h2 className="card-title">{service.name}</h2>
                                {service.description}
                                <div className="card-actions justify-end">
                                    <button className="">Read More</button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
            <OurDoctors/>



        </div>
    )
}

export default Home