import React, { useEffect } from 'react';
import ImageSliderForWhyUs from './commonComponent/ImageSliderForWhyUs';
import Heading from './Heading';

const WhyUs = () => {



    return (
        <div className='hidden h-screen w-full bg-[#FAF6F0] text-gray-900 px-12 py-6 md:flex flex-col items-center'>
            
            <Heading text={"Why Us?"}/>

            <div className='h-2/3 w-3/4 bg-white border border-gray-300 mt-[60px] flex items-center shadow-lg rounded-xl'>

                <ImageSliderForWhyUs />

                <div className='w-1/2 px-8 py-6'>
                    <h2 className="text-2xl font-semibold mb-4">Your Trusted Partner for Quality & Reliability</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We pride ourselves on delivering top-notch services tailored to your needs. With a team of highly experienced professionals, advanced techniques, and a commitment to customer satisfaction, we go above and beyond to exceed expectations.
                        <br /><br />
                        Whether you're looking for expert waterproofing, skilled manpower supply, or reliable construction support, we ensure timely delivery, transparency, and unmatched quality in every project we undertake.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
