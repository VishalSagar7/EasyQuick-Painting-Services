import React, { useEffect } from 'react'
import SeconderyNavbar from '../components/SeconderyNavbar'
import BackgroundBanner from '../components/BackgroundBanner'
import ContactUsForm from '../components/ContactUsForm'
import Footer from '../components/Footer'
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPinCheckInside } from 'lucide-react';
import ContactUsBanner from "../assets/contactusbanner.jpg"
import Navbar from '../components/Navbar'

const ContactUsPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <div className='w-full bg-[#FAF6F0]'>
            {/* <Navbar /> */}
            <SeconderyNavbar />
            <BackgroundBanner heading={"Get in Touch With Us"} imgAddress={ContactUsBanner} />
            <div className=' py-8 px-[50px] md:px-[150px]'>
                <p className='text-gray-700 text-md'>
                    We’re here to help you bring your vision to life! Whether you have a question, need a quote, or want to discuss your project, feel free to reach out. Fill out the form below and our team will get back to you as soon as possible.
                    Let’s start something great together!
                </p>
            </div>

            <div className=' py-3 md:py-6'>
                <ContactUsForm />
            </div>


            <div className=' px-[50px] md:px-[150px] mt-8 w-full space-y-2'>

                <div className='flex gap-4'>
                    <Phone color=' gray ' />
                    <h1 className=' text-gray-800 '>+91 6304052683</h1>
                </div>

                <div className='flex gap-4'>
                    <Mail color=' gray ' />
                    <h1 className=' text-gray-800 '>easyquickpainting@gmail.com</h1>
                </div>
                <div className='flex gap-4'>
                    <MapPinCheckInside color=' gray ' />
                    <h1 className=' text-gray-800 '>18 Bombala Street Tarneit VIC 3029</h1>
                </div>


            </div>

            <Footer />

        </div>
    )
}

export default ContactUsPage
