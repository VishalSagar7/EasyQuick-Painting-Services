import React from 'react'
import Logo from "../assets/Logo.png";

const Footer = () => {
    return (
        <div className='h-[350px] w-full bg-[#201D1F] flex justify-between p-8 text-center mt-[60px]'>


            <div className='h-full  w-[30%] flex items-center justify-center'>
                <img src={Logo} alt="" />
            </div>
            <div className='h-full  w-[30%]  '>
                <h1 className='text-[1.5rem] font-semibold text-white'>Products</h1>
                <ul className='py-2 space-y-2'>
                    <li className=' cursor-pointer'>Interior Painting</li>
                    <li className=' cursor-pointer'>Exterior Painting</li>
                    <li className=' cursor-pointer'>Wall Textures & Designs</li>
                    <li className=' cursor-pointer'>Luppam (putty work)</li>
                    <li className=' cursor-pointer'>Waterproofing Solutions</li>
                    <li className=' cursor-pointer'>Manpower Supply</li>
                </ul>
            </div>


            <div className='h-full w-[30%]  '>
                <h1 className='text-[1.5rem] font-semibold text-white'>Support</h1>
                <ul className='py-2 space-y-2'>
                    <li className=' cursor-pointer'>Customer Care</li>
                    <li className=' cursor-pointer'>Sitemap</li>
                </ul>
            </div>

            <div className='h-full w-[30%] '>
                <h1 className='text-[1.5rem] font-semibold text-white'>Social Media</h1>
                <ul className='py-2 space-y-2'>
                    <li className=' cursor-pointer'>Instagram</li>
                    <li className=' cursor-pointer'>Facebook</li>
                    <li className=' cursor-pointer'>Youtube</li>
                    <li className=' cursor-pointer'>Linkedin</li>
                </ul>
            </div>
      
        </div>
    )
}
    
export default Footer;
