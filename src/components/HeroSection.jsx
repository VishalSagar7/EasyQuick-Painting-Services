import React from 'react'
import ImageSlider from './ImageSlider'
import { Check } from 'lucide-react';

const HeroSection = () => {
    return (
        <div
            className=" section flex items-center relative h-[calc(100vh-100px)] w-full "
        >
            <ImageSlider />

            <div className='z-10 h-full w-full flex items-center justify-between lg:pl-12 '>
                <div className=" h-full  md:h-1/3 w-[400px] md:w-1/2 ">
                    <div className='h-full w-full bg-black/40 p-4 rounded'>
                        <h1 className=" text-white text-3xl md:text-4xl font-bold capitalize py-3 rounded-lg">
                            Transform Your Space
                        </h1>
                        <p className='hidden md:block'>where walls become art and colors speak louder than words. Whether it’s your home, office, or commercial space, we bring your vision to life with precision, passion, and a splash of creativity. From vibrant feature walls to elegant finishes, our expert team ensures flawless results that last. Step into a world where quality meets artistry – because every space deserves a beautiful finish.</p>
                       
                    </div>
                </div>

                <div className='z-10 w-[400px] h-full bg-[#9b023d] py-6 text-white'>
                   
                    <ul className=" pl-2 lg:pl-6 space-y-2 text-lg">
                        <div className='w-full flex items-center'>
                            <Check color='green'/>
                            <li className='ml-2'>Interior Wall Painting</li>
                        </div>
                        <div className='w-full flex items-center'>
                            <Check color='green' />
                            <li className='ml-2'>Exterior Wall Painting</li>
                        </div>
                        <div className='w-full flex items-center'>
                            <Check color='green' />
                            <li className='ml-2'>Texture Painting</li>
                        </div>
                        <div className='w-full flex items-center'>
                            <Check color='green' />
                            <li className='ml-2'>Luppam (Putty Work)</li>
                        </div>
                        <div className='w-full flex items-center'>
                            <Check color='green' />
                            <li className='ml-2'>Waterproofing</li>
                        </div>
                        <div className='w-full flex items-center'>
                            <Check color='green' />
                            <li className='ml-2'>Wall Designing</li>
                        </div> 
                        <div className='w-full flex items-center'>
                            <Check color='green' />
                            <li className='ml-2'>Manpower Supply for Contractors</li>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default HeroSection;
