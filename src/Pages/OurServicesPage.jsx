import React from 'react'
import SeconderyNavbar from '../components/SeconderyNavbar';
import BackgroundBanner from '../components/BackgroundBanner';
import OurServicesBanner from "../assets/ourservicesbanner.jpg";
import { servicesArray } from '../components/utils/inputFieldCss';
import LongServiceCard from '../components/LongServiceCard';
import Footer from '../components/Footer';

const OurServicesPage = () => {
    return (
        <div className='w-full bg-[#FAF6F0]'>

            <SeconderyNavbar />
            <BackgroundBanner heading={"Explore Our Services"} imgAddress={OurServicesBanner} />
            <div className=' py-8 px-[50px] md:px-[150px]'>
                <p className='text-gray-700 text-md'>
                    At Paint project, we pride ourselves on delivering top-quality painting and manpower solutions tailored to your needs. With years of experience and a dedicated team, we offer a full range of services designed to enhance your spaces with precision, creativity, and professionalism.
                </p>
            </div>


            <div className='min-h-screen px-[30px] md:px-[150px] space-y-4'

            >
                {
                    servicesArray?.map((service) => 
                        <LongServiceCard service={ service } />
                    )
                }
            </div>



            <Footer/>

        </div>
    )
}

export default OurServicesPage;
