import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
            {/* SEO Helmet */}
            <Helmet>
                <title>About Us | EasyQuick</title>
                <meta
                    name="description"
                    content="Learn about EasyQuick (Urban Paints) – trusted painting experts offering interior, exterior, and designer wall painting with premium quality and customer-first service."
                />
                <meta name="keywords" content="EasyQuick, Urban Paints, painting services, texture painting, wall painting, affordable painters" />

                {/* Open Graph (for Facebook, LinkedIn, WhatsApp) */}
                <meta property="og:title" content="About Us | EasyQuick" />
                <meta property="og:description" content="We don’t just paint walls—we transform spaces with quality, trust, and creativity. Discover EasyQuick’s story." />
                <meta property="og:image" content="https://easyquick.com/preview-about.jpg" />
                <meta property="og:url" content="https://easyquick.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | EasyQuick" />
                <meta name="twitter:description" content="Trusted experts in painting & design – EasyQuick (Urban Paints). Learn more about our journey and services." />
                <meta name="twitter:image" content="https://easyquick.com/preview-about.jpg" />
            </Helmet>

            {/* Page Content */}
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
