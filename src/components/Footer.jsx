import React from 'react'
import Logo from "../assets/Logo.png";
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='h-auto w-full bg-[#201D1F] flex justify-between p-4 md:p-8 text-center mt-[60px]'>


            <div className='hidden h-full  w-[30%] md:flex items-center justify-center'>
                <img src={Logo} alt="" />
            </div>
            <div className='h-full  w-[30%]  '>
                <h1 className='text-[1rem] md:text-[1.5rem] font-semibold text-white'>Products</h1>
                <ul className='py-2 flex flex-col gap-2'>
                    <Link to={"/individualservice/101"}><li className=' text-white hover:text-gray-300 cursor-pointer'>Interior Painting</li></Link>
                    <Link to={"/individualservice/102"}><li className=' text-white hover:text-gray-300 cursor-pointer'>Exterior Painting</li></Link>
                    <Link to={"/individualservice/103"}><li className=' text-white hover:text-gray-300 cursor-pointer'>Wall Textures & Designs</li></Link>
                    <Link to={"/individualservice/104"}><li className=' text-white hover:text-gray-300 cursor-pointer'>Luppam (putty work)</li></Link>
                    <Link to={"/individualservice/105"}><li className=' text-white hover:text-gray-300 cursor-pointer'>Waterproofing Solutions</li></Link>
                    <Link to={"/individualservice/106"}><li className=' text-white hover:text-gray-300 cursor-pointer'>Manpower Supply</li></Link>
                </ul>
            </div>


            <div className='h-full w-[30%]  '>
                <h1 className='text-[1rem] md:text-[1.5rem] font-semibold text-white'>Support</h1>
                <ul className='py-2 space-y-2'>
                    <li className=' text-white cursor-pointer'>Customer Care</li>
                    <li className=' text-white cursor-pointer'>Sitemap</li>
                </ul>
            </div>

            <div className='h-full w-[30%] '>
                <h1 className='text-[1rem] md:text-[1.5rem] font-semibold text-white'>Social Media</h1>
                <ul className='py-2 space-y-2'>
                    <Link to={"https://www.instagram.com/easy.quickpaintingserv3"}><li className=' cursor-pointer'>Instagram</li></Link>
                    <li className=' text-white cursor-pointer hover:text-gray-300'>Facebook</li>
                    <li className=' text-white cursor-pointer hover:text-gray-300'>Youtube</li>
                    <li className=' text-white cursor-pointer hover:text-gray-300'>Linkedin</li>
                </ul>
            </div>
      
        </div>
    )
}
    
export default Footer;
