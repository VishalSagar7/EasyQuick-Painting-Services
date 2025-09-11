import React, { useEffect } from 'react';
import SeconderyNavbar from '../components/SeconderyNavbar';
import Footer from '../components/Footer';
import FullHomePainting from '../components/FullHomePainting.jsx';

const OurServicesPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <>

            <SeconderyNavbar />
            <FullHomePainting />
            <Footer />
        </>
    );
};

export default OurServicesPage;
