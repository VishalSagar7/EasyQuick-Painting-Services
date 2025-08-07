import React,{useEffect} from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';



const ServiceCard = ({ service }) => {
    
        useEffect(() => {
            AOS.init({
                duration: 500,
                once: true,
            });
        }, []);
    
    return (
        <div data-aos="fade-down" className='h-[500px] w-[400px] bg-white  rounded-lg overflow-hidden text-gray-900 border border-gray-200 shadow'>

            <div className='h-1/2 w-full overflow-hidden'>
                <img className='h-full w-full object-cover transition-transform duration-400 hover:scale-105' src={service?.imgAddress } alt="" />
            </div>
            <div className='h-1/2 w-full p-4 md:p-4'>
                <h1 className='text-2xl '>{service?.heading}</h1>
                <ul className='list-disc space-y-1 md:space-y-3 text-gray-700 p-2 md:p-4'>
                    <li>{service?.desc1}</li>
                    <li>{service?.desc2}</li>
                </ul>
            </div>

        </div>
    )
}

export default ServiceCard;
