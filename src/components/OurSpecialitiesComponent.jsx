import React from 'react';
import { useEffect } from 'react';
import Heading from './Heading';
import AOS from "aos";
import 'aos/dist/aos.css';
import SpecialityCard from './commonComponent/SpecialityCard';
import homebgimg2 from "../assets/homebgimg2.jpg"




const OurSpecialitiesComponent = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);




    return (
        <div className='hidden md:block  w-full bg-[#FAF6F0] text-gray-900 p-12'>


            <Heading text={"Our Specialities"}/>


            <div className=' rounded-lg'
                // style={{
                //     backgroundImage: `url(${homebgimg2})`,
                //     backgroundSize: "cover",
                //     backgroundPosition: "right center",
                //     backgroundRepeat: "no-repeat",
                //     height: "250px"
                // }}
            >
                <div data-aos="fade-left" className=' bg-white text-black px-4 py-6 rounded-lg shadow w-1/2'>
                    <ul className='list-disc pl-6 space-y-3 text-xl font-normal'>
                        <li>Experienced Manpower Supply.</li>
                        <li>Texture & Designer Wall Painting.</li>
                        <li>Affordable Per Sq. Ft. Rates.</li>
                        <li>Same-Day Service Available.</li>
                        <li>Industrial, Commercial & Residential Projects.</li>
                    </ul>
                </div>

 

            </div>

        </div>
    )
}

export default OurSpecialitiesComponent;
