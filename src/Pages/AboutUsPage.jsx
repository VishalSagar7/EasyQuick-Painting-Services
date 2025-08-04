import React from 'react'
import SeconderyNavbar from '../components/SeconderyNavbar';
import backroundbanner from "../assets/aboutpagebanner.jpg";
import BackgroundBanner from '../components/BackgroundBanner';
import Footer from '../components/Footer';

const AboutUsPage = () => {
    return (
        <div className='w-full bg-[#FAF6F0]'>
            <SeconderyNavbar />
            <BackgroundBanner heading={"Know About Us"} imgAddress={backroundbanner } />

            <div className='px-[150px]'>
                <div className=' w-full my-4'>
                    <p className='text-gray-700'>
                        At Urban Paints, we don’t just paint walls—we transform spaces. With a passion for precision and an eye for detail, our team of experienced professionals brings life to homes, offices, and commercial buildings through exceptional painting services.

                        Founded on trust, quality, and customer satisfaction, we pride ourselves on using premium materials, innovative techniques, and a customer-first approach. Whether it's a modern interior makeover or a bold exterior refresh, we handle each project with care, commitment, and creativity.

                        We believe that every space has a story—and we’re here to paint it beautifully.
                    </p>
                </div>


                <div className='flex h-[300px] items-center '>
                    <div className=' w-1/2'>
                        <ul className='list-disc text-gray-700  pl-6 space-y-3 text-xl font-medium'>
                            <li>Texture & Designer Wall Painting.</li>
                            <li>Experienced Manpower Supply.</li>
                            <li>Affordable Per Sq. Ft. Rates.</li>
                            <li>Same-Day Service Available.</li>
                            <li>Industrial, Commercial & Residential Projects.</li>
                        </ul>
                    </div>
                    <div className='h-full w-1/2 '>
                        {/* <img className='h-full w-full object-cover object-center'  src="https://img.freepik.com/free-vector/realistic-painter-roller-with-blot-pink-paint-grey-background-vector-illustration_1284-83332.jpg?t=st=1753951710~exp=1753955310~hmac=d7e66b265376a9ed0d0dd8d75abfdb0f5fdc92521c1f071ae1c77a78c686243f&w=1380" alt="" /> */}
                    </div>

                </div>
            </div>


            <Footer/>


        </div>
    )
}

export default AboutUsPage;
