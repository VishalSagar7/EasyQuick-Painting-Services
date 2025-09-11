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



const Home = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    return (
        <>
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
