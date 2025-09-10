import React, { useEffect } from 'react'
import SeconderyNavbar from '../components/SeconderyNavbar';
import BackgroundBanner from '../components/BackgroundBanner';
import OurServicesBanner from "../assets/ourservicesbanner.jpg";
import LongServiceCard from '../components/LongServiceCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FullHomePainting from '../components/FullHomePainting.jsx';

const OurServicesPage = () => {


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <> 
           
            <SeconderyNavbar />
            <FullHomePainting/>
            <Footer/>

        </>
    )
}

export default OurServicesPage;
