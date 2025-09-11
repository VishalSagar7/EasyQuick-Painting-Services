import ImageSlider from '../components/ImageSlider'
import OurSpecialitiesComponent from '../components/OurSpecialitiesComponent'
import OurServices from '../components/OurServices'
import WhyUs from '../components/WhyUs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactUsForm from '../components/ContactUsForm'
import Steps from '../components/Steps'
import ThreeSpecialities from '../components/ThreeSpecialities'
import SeconderyNavbar from '../components/SeconderyNavbar'
import HeroSection from '../components/HeroSection'
import TeamCarousel from '../components/OurTeam'
import CustomizedAccordions from '../components/Accordian'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'   // ✅ import Helmet


const Home = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <>
            {/* ✅ Helmet SEO */}
            <Helmet>
                <title>EasyQuick | Home</title>
                <meta
                    name="description"
                    content="Welcome to EasyQuick – delivering high-quality services to make your life easier. Discover our specialities, services, and why clients trust us."
                />
                <meta name="keywords" content="EasyQuick, services, home, reliable, trusted solutions" />

                {/* Open Graph (Facebook, LinkedIn, WhatsApp Preview) */}
                <meta property="og:title" content="EasyQuick | Home" />
                <meta property="og:description" content="Discover EasyQuick's wide range of services designed to make your life easier." />
                <meta property="og:image" content="https://easyquick.com/preview-image.jpg" />
                <meta property="og:url" content="https://easyquick.com/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="EasyQuick | Home" />
                <meta name="twitter:description" content="Fast & reliable services to simplify your life with EasyQuick." />
                <meta name="twitter:image" content="https://easyquick.com/preview-image.jpg" />
            </Helmet>

            {/* <Navbar /> */}
            <SeconderyNavbar />
            <HeroSection />
            {/* <OurSpecialitiesComponent /> */}
            <CustomizedAccordions />
            <ThreeSpecialities />
            <OurServices />
            <TeamCarousel />
            <Steps />
            <WhyUs />
            <ContactUsForm />
            <Footer />
        </>
    )
}

export default Home;
