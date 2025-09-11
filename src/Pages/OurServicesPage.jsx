import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SeconderyNavbar from '../components/SeconderyNavbar';
import Footer from '../components/Footer';
import FullHomePainting from '../components/FullHomePainting.jsx';

const OurServicesPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <>
            {/* SEO Helmet */}
            <Helmet>
                <title>Our Services | EasyQuick</title>
                <meta
                    name="description"
                    content="Explore EasyQuick’s wide range of professional painting services – from full home painting, designer textures, to industrial and commercial projects. Quality guaranteed!"
                />
                <meta
                    name="keywords"
                    content="EasyQuick services, painting services, home painting, wall textures, commercial painting, industrial painting"
                />

                {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
                <meta property="og:title" content="Our Services | EasyQuick" />
                <meta
                    property="og:description"
                    content="Discover premium painting services by EasyQuick – tailored for homes, offices, and commercial spaces."
                />
                <meta
                    property="og:image"
                    content="https://easyquick.com/preview-services.jpg"
                />
                <meta property="og:url" content="https://easyquick.com/ourservices" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services | EasyQuick" />
                <meta
                    name="twitter:description"
                    content="EasyQuick offers full home painting, designer textures, and reliable painting solutions for every project."
                />
                <meta
                    name="twitter:image"
                    content="https://easyquick.com/preview-services.jpg"
                />
            </Helmet>

            {/* Page Content */}
            <SeconderyNavbar />
            <FullHomePainting />
            <Footer />
        </>
    );
};

export default OurServicesPage;
