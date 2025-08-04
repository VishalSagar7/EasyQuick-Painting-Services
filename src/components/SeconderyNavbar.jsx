import { Link } from "react-router-dom"
import React from 'react'
import Logo from "../assets/Logo.png";

const SeconderyNavbar = () => {
    return (
        <div className='w-full section h-[90px] text-[#8a0136] bg-white flex justify-between items-center px-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'>

            <div className='h-full flex items-center'>
                <img className="h-[65px]" src={Logo} alt="" />
            </div>
            <div className='h-full flex items-center gap-8 uppercase  font-semibold'>
                <Link to={"/"}><a href="#" className="link-underline">Home</a></Link>
                <Link to={"/aboutus"}><a href="#" className="link-underline">About us</a></Link>
                <Link to={"/ourservices"}><a href="#" className="link-underline">Our services</a></Link>
                <a href="#" className="link-underline">Testimonials</a>
                <Link to={"/contactus"}><a href="#" className="link-underline">Contact us</a></Link>
                <a href="#" className="link-underline">Faq</a>
            </div>


        </div>
    )
}

export default SeconderyNavbar
