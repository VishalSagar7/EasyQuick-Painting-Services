import React from 'react';
import { useEffect } from 'react';
import { Paintbrush, PaintRoller, Clock9 } from 'lucide-react';
import AOS from "aos";
import 'aos/dist/aos.css';
import SpecialityCard from './commonComponent/SpecialityCard';
import homebgimg2 from "../assets/homebgimg2.jpg"

const specialitiesArray = [
    {
        heading: "Supervised Painting",
        description: "Painting your home can be challenging, which is why we offer a supervised service. Our attentive supervisor ensure that every detail is meticulously managed, providing a seamless experience for you and your family.",
        logo: <Paintbrush size={40} />
    },
    {
        heading: "Usage of mechanised tools",
        description: "The use of spray painting and mechanised sander ensures optimum utilisation of time. These mechanised tools help in achieving a smooth and high-quality finish too. This means less distruption for you and your family.",
        logo: <PaintRoller size={40} />
    },
    {
        heading: "One time completion",
        description: "We value your time and understand the importance of timely completion, which is why we are commited to delievering on-time painting services. Your project will be completed as sheduled, ensuring a smooth and hassle-free experience.",
        logo: <Clock9 size={40} />
    },

]


const OurSpecialitiesComponent = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);




    return (
        <div className='min-h-screen w-full bg-[#FAF6F0] text-gray-900 p-12'>
            <h1 className='text-4xl font-bold font-mono capitalize'>Our Specialities</h1>

            <div className='my-4 p-2 rounded-lg'
                style={{
                    backgroundImage: `url(${homebgimg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                    height: "250px"
                }}
            >
                <div data-aos="fade-left" className='my-6'>
                    <ul className='list-disc italic pl-6 space-y-3 text-xl font-medium'>
                        <li>Experienced Manpower Supply.</li>
                        <li>Texture & Designer Wall Painting.</li>
                        <li>Affordable Per Sq. Ft. Rates.</li>
                        <li>Same-Day Service Available.</li>
                        <li>Industrial, Commercial & Residential Projects.</li>
                    </ul>
                </div>
            </div>

            <div className='py-6 flex justify-between  '>
                {
                    specialitiesArray?.map((speciality) =>
                        <SpecialityCard speciality={speciality} />
                    )
                }
            </div>
        </div>
    )
}

export default OurSpecialitiesComponent;
