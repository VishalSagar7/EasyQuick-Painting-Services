import React from 'react'
import SeconderyNavbar from './SeconderyNavbar'

const Navbar = () => {
    return (
        <div className='w-full '>
            <div className='w-full section flex h-8 md:h-10 bg-[#72002c] justify-between text-white text-xs px-2 md:text-sm md:px-12'>
                <div className='h-full w-[200px] flex items-center '>
                    <p>+91 9764337789</p>
                </div>
                <div className='h-full items-center gap-4 hidden md:flex'>
                    <p>vishalaynile1234@gmail.com</p>
                    <p>18 Bombala Street Tarneit VIC 3029</p>
                </div>
            </div>

            <SeconderyNavbar />


        </div>
    )
}

export default Navbar
