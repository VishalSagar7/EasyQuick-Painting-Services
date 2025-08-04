import React from 'react'
import ImageSlider from './ImageSlider'

const HeroSection = () => {
    return (
        <div
            className=" section relative h-screen w-full"
        >
            <ImageSlider />

            <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-10 flex items-center h-1/3 w-1/2 justify-center">
                <div className='h-full w-full bg-black/40 p-4 rounded'>
                    <h1 className="text-white text-4xl font-bold py-3 rounded-lg">
                        Welcome to Our Painting Service
                    </h1>
                    <p>Welcome to our painting project – where walls become art and colors speak louder than words. Whether it’s your home, office, or commercial space, we bring your vision to life with precision, passion, and a splash of creativity. From vibrant feature walls to elegant finishes, our expert team ensures flawless results that last. Step into a world where quality meets artistry – because every space deserves a beautiful finish.</p>
                </div>
            </div>

        </div>
    )
}

export default HeroSection;
