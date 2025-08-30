import React,{useEffect} from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';

const LongServiceCard = ({ service }) => {

            useEffect(() => {
                AOS.init({
                    duration: 500,
                    once: true,
                });
            }, []);
    
    
    return (
        <div data-aos="fade-right" className=' h-[300px] w-full md:h-[200px]'>
            <div className='w-full h-full flex bg-white rounded-xl overflow-hidden shadow'>
                <div className='h-full w-[40%]'>
                    <img
                        className='h-full w-full object-center object-cover'
                        src={ service?.imgAddress } alt="" />
                </div>
                <div className='h-full w-[60%] px-4 py-2 md:px-8 md:py-2'>
                    <h1 className='text-xl text-gray-700 font-semibold'>{ service?.serviceName }</h1>

                    <ul className='list-disc text-md space-y-3 text-gray-600 p-4'>
                        <li>{ service?.desc1 }</li>
                        <li className='hidden md:block'>{ service?.desc2 }</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default LongServiceCard;
