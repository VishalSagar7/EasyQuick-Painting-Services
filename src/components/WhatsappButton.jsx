import React,{useState,useEffect} from "react";
import wpLogo from "../assets/icons/wpLogo.png"
import {Link} from 'react-router-dom'


const WhatsappButton = () => {

    const [showPopup, setShowPopup] = useState(false);


    useEffect(() => {
        // Show popup after 3 seconds (you can adjust this)
        const timer = setTimeout(() => {
            setShowPopup(true);

            // Auto-hide after 5 seconds (optional)
            setTimeout(() => setShowPopup(false), 5000);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <a
            href="https://wa.me/916304052683?text=Hello!%20I%20would%20like%20to%20know%20more."
            target="_blank"
            className="fixed cursor-pointer object-center object-cover bottom-4 md:bottom-6 right-3 md:right-8 border rounded-full shadow-lg transition-all duration-300 z-50"
        >
            {showPopup && (
                <div className="absolute bottom-12 w-[100px] right-0 bg-white text-gray-800 px-3 py-2 rounded-xl rounded-br-none shadow-md text-sm border border-gray-200 animate-bounce">
                    Contact on WhatsApp
                </div>
            )}

            <img
                className=" h-8 md:h-10 object-center object-cover transition duration-300 hover:rotate-12"
                src={wpLogo}
                alt=""
            />

        </a>
    );
};

export default WhatsappButton;
