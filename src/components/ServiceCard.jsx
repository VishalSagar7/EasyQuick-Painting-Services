import React, { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';



const ServiceCard = ({ service }) => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    return (
        <div data-aos="fade-down" className=' w-[400px] bg-white  rounded-lg overflow-hidden text-gray-900 border border-gray-200 shadow'>

            <div className=' h-[250px] w-full overflow-hidden'>
                <img className='h-full w-full object-cover transition-transform duration-400 hover:scale-105' src={service?.imgAddress} alt="" />
            </div>
            <div className=' w-full p-4'>
                <h1 className='text-2xl '>{service?.serviceName}</h1>
                <ul className='list-disc space-y-1 md:space-y-3 text-gray-700 p-2 md:p-4'>
                    <li>{service?.desc1}</li>
                </ul>

                

                <Link to={`/individualservice/${service?.servicecode}`}>
                    <button className="group cursor-pointer btn btn-sm md:btn-md bg-[#c1034b] border-none flex items-center gap-1">
                        show more
                        <ChevronRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </button>
                </Link>
            </div>


        </div>
    )
}

export default ServiceCard;
