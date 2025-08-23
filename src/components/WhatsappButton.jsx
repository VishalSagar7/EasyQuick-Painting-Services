import React, { useState, useEffect } from "react";
import wpLogo from "../assets/icons/wpLogo.png";

const WhatsappButton = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setShowPopup(true); 
            const hideTimer = setTimeout(() => {
                setShowPopup(false); 
            }, 5000);

            return () => clearTimeout(hideTimer);
        }, 10000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <a
            href="https://wa.me/916304052683?text=Hello!%20I%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed cursor-pointer object-center object-cover bottom-4 md:bottom-6 right-3 md:right-8 shadow-lg transition-all duration-300 z-50"
        >
            {showPopup && (
                <div className="absolute bottom-12 w-[100px] right-0 bg-white text-gray-800 px-3 py-2 rounded-xl rounded-br-none shadow-md text-sm border border-gray-200 animate-bounce">
                    Contact on WhatsApp
                </div>
            )}

            <img
                className="h-8 md:h-10 object-center object-cover transition duration-300 hover:rotate-12"
                src={wpLogo}
                alt="WhatsApp"
            />
        </a>
    );
};

export default WhatsappButton;
