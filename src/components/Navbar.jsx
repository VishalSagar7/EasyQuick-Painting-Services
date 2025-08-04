import React from 'react'
import SeconderyNavbar from './SeconderyNavbar'

const Navbar = () => {
    return (
        <div className='w-full'>
            <div className='w-full section flex h-10 bg-[#72002c] justify-between text-white text-sm px-12'>
                <div className='h-full w-[200px] flex items-center '>
                    <p>+91 9764337789</p>
                </div>
                <div className='h-full flex items-center gap-4'>
                    <p>vishalaynile1234@gmail.com</p>
                    <p>18 Bombala Street Tarneit VIC 3029</p>
                </div>
            </div>

            <SeconderyNavbar />


        </div>
    )
}

export default Navbar
