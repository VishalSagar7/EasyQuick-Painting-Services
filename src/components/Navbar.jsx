import React from 'react'
import SeconderyNavbar from './SeconderyNavbar'
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';

const Navbar = () => {
    return (
        <div className=''>
            <div className=' section flex h-8  md:h-8 bg-[#72002c] justify-between text-white text-xs px-2 md:text-sm md:px-12'>
                <div className='h-full w-[200px] flex items-center '>
                    <Phone size={15} />
                    <p className='ml-2'>+91 6304052683</p>
                </div>
                <div className='h-full items-center gap-4 hidden md:flex'>
                    <div className='flex items-center h-full'>
                        <Mail size={15} />
                        <p className='ml-1'>easyquickpainting@gmail.com</p>
                    </div>
                    <div className='ml-4 h-full flex items-center'>
                        <MapPinHouse size={15} />
                        <p className='ml-1'>18 Bombala Street Tarneit VIC 3029</p>
                    </div>
                </div>
            </div>

            


        </div>
    )
}

export default Navbar
