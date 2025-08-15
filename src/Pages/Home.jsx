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



const Home = () => {


    return (
        <div className='min-h-screen w-auto bg-[#FAF6F0] font-roboto'>


            <Navbar />

            <SeconderyNavbar />
            
            <HeroSection/>

            {/* <OurSpecialitiesComponent /> */}
            
            <CustomizedAccordions/>

            <ThreeSpecialities/>

            <OurServices />

            <TeamCarousel/>

            <Steps />

            <WhyUs />

            <ContactUsForm />

            <Footer />



        </div>
    )
}

export default Home;
