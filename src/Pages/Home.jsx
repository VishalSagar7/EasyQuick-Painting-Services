import ImageSlider from '../components/ImageSlider'
import OurSpecialitiesComponent from '../components/OurSpecialitiesComponent'
import OurServices from '../components/OurServices'
import WhyUs from '../components/WhyUs'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import ContactUsForm from '../components/ContactUsForm'
import Steps from '../components/Steps'
import ThreeSpecialities from '../components/ThreeSpecialities'



const Home = () => {


    return (
        <div className='min-h-screen w-full overflow-hidden bg-[#FAF6F0] '>


            <Navbar />

            <HeroSection />

            <OurSpecialitiesComponent />

            <ThreeSpecialities/>

            <OurServices />

            <Steps />

            <WhyUs />

            <ContactUsForm />

            <Footer />



        </div>
    )
}

export default Home;
