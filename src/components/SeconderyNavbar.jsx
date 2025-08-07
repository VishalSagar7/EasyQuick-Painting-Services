// src/components/SeconderyNavbar.jsx
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Menu } from 'lucide-react';
import RightDrawer from "./RightDrawer";

const SeconderyNavbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setOpenDrawer(open);
    };

    return (
        <div className="w-full section h-[70px] lg:h-[90px] text-[#8a0136] bg-white flex justify-between items-center px-2 lg:px-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">

            <div className="h-full flex items-center">
                <img className="h-[50px] lg:h-[65px]" src={Logo} alt="Logo" />
            </div>

            <div className="h-full hidden md:flex items-center gap-8 uppercase font-semibold">
                <Link to="/" className="link-underline">Home</Link>
                <Link to="/aboutus" className="link-underline">About us</Link>
                <Link to="/ourservices" className="link-underline">Our services</Link>
                <Link to="/ourwork" className="link-underline">Our Work</Link>
                <Link to="/contactus" className="link-underline">Contact us</Link>
            </div>

            <div className="md:hidden">
                <button onClick={toggleDrawer(true)}>
                    <Menu size="40px" />
                </button>
            </div>

            <RightDrawer open={openDrawer} toggleDrawer={toggleDrawer} />
        </div>
    );
};

export default SeconderyNavbar;
