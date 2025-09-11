import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SeconderyNavbar from '../components/SeconderyNavbar';
import BackgroundBanner from '../components/BackgroundBanner';
import ContactUsForm from '../components/ContactUsForm';
import Footer from '../components/Footer';
import { Phone, Mail, MapPinCheckInside } from 'lucide-react';
import ContactUsBanner from "../assets/contactusbanner.jpg";

const ContactUsPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <div className='w-full bg-[#FAF6F0]'>
            {/* SEO Helmet */}
            <Helmet>
                <title>Contact Us | EasyQuick</title>
                <meta
                    name="description"
                    content="Get in touch with EasyQuick for professional painting services. Call, email, or fill out our form to start your project today!"
                />
                <meta
                    name="keywords"
                    content="EasyQuick contact, painting services contact, hire painters, painting quotes, home painting support"
                />

                {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
                <meta property="og:title" content="Contact Us | EasyQuick" />
                <meta
                    property="og:description"
                    content="Reach out to EasyQuick for affordable and professional painting services. We’re here to help transform your space."
                />
                <meta
                    property="og:image"
                    content="https://easyquick.com/preview-contact.jpg"
                />
                <meta property="og:url" content="https://easyquick.com/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us | EasyQuick" />
                <meta
                    name="twitter:description"
                    content="Looking for professional painting services? Contact EasyQuick today and let’s discuss your project."
                />
                <meta
                    name="twitter:image"
                    content="https://easyquick.com/preview-contact.jpg"
                />
            </Helmet>

            {/* Page Content */}
            <SeconderyNavbar />
            <BackgroundBanner heading={"Get in Touch With Us"} imgAddress={ContactUsBanner} />

            <div className='py-8 px-[50px] md:px-[150px]'>
                <p className='text-gray-700 text-md'>
                    We’re here to help you bring your vision to life! Whether you have a question, need a quote, or want to discuss your project, feel free to reach out. Fill out the form below and our team will get back to you as soon as possible.
                    Let’s start something great together!
                </p>
            </div>

            <div className='py-3 md:py-6'>
                <ContactUsForm />
            </div>

            <div className='px-[50px] md:px-[150px] mt-8 w-full space-y-2'>
                <div className='flex gap-4'>
                    <Phone color='gray' />
                    <h1 className='text-gray-800 md:text-lg'>+91 6304052683</h1>
                </div>
                <div className='flex gap-4'>
                    <Mail color='gray' />
                    <h1 className='text-gray-800 md:text-lg'>easyquickpainting@gmail.com</h1>
                </div>
                <div className='flex gap-4'>
                    <MapPinCheckInside color='gray' />
                    <h1 className='text-gray-800 md:text-lg'>Chappal Bazaar, Kachiguda 500027, Hyderabad.</h1>
                </div>
            </div>

            <Footer />

        </div>
    );
};

export default ContactUsPage;
