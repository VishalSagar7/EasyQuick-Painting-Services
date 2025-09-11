import React, { useEffect } from 'react';
import SeconderyNavbar from '../components/SeconderyNavbar';
import backroundbanner from "../assets/aboutpagebanner.jpg";
import BackgroundBanner from '../components/BackgroundBanner';
import Footer from '../components/Footer';

const AboutUsPage = () => {
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <div className='w-full bg-[#FAF6F0]'>

            
            <SeconderyNavbar />
            <BackgroundBanner heading={"Know About Us"} imgAddress={backroundbanner} />

            <div className='px-[50px] lg:px-[150px]'>
                <div className='w-full my-4'>
                    <p className='text-gray-700'>

                        Founded on trust, quality, and customer satisfaction, we pride ourselves on using premium materials, innovative techniques, and a customer-first approach. Whether it's a modern interior makeover or a bold exterior refresh, we handle each project with care, commitment, and creativity.

                        We believe that every space has a story—and we’re here to paint it beautifully.
                    </p>
                </div>
            </div>

            <div className='pt-6 px-[50px] lg:px-[150px] flex items-center'>
                <div className='lg:w-1/2'>
                    <ul className='list-disc text-gray-700 pl-6 space-y-3 text-xl font-medium'>
                        <li>Texture & Designer Wall Painting.</li>
                        <li>Experienced Manpower Supply.</li>
                        <li>Affordable Per Sq. Ft. Rates.</li>
                        <li>Same-Day Service Available.</li>
                        <li>Industrial, Commercial & Residential Projects.</li>
                    </ul>
                </div>
                <div className='h-full w-1/2'>
                    {/* Add optional image here */}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUsPage;
