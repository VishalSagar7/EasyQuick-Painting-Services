import WorkIcon from './WorkIcon';
import React from 'react';
import labourBgImg from "../assets/LabourImg2.jpg";
import workersIcon from "../assets/icons/workersicon.png"
import paintbrushIcon from "../assets/icons/paintbrushicon.png"
import waterproofing from "../assets/icons/waterproofing.png"
import affordablerates from "../assets/icons/rates.png"
import putty from "../assets/icons/putty.png"
import texture from "../assets/icons/texture.png"
import cleanupIcon from "../assets/icons/cleanup.png"
import HeroSectionForm from './HeroSectionForm';


const HeroSection = () => {
    return (
        <div className="w-full box-border h-[calc(100vh-110px)] overflow-x-hidden md:flex items-center justify-between md:px-12"
            style={{
                // backgroundImage: `url(${labourBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className=' w-full  md:w-[700px] md:h-full md:flex md:flex-col md:justify-center '>
                <h2 className="mx-2 text-[20px] md:text-[2.5rem] my-3 text-red-900 font-normal md:font-light mt:0  md:mb-3 leading-tight capitalize">
                    Transforming Walls, Elevating Spaces,
                    <br className='hidden md:block' />
                    Inspiring Every View.
                </h2>

                <div className=" h-auto w-full md:h-auto md:w-auto md:pt-6  px-2  md:pb-2 bg-white  md:rounded-lg shadow">


                    <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:gap-0 md:space-y-6 pt-4 md:pt-0 md:py-0">
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/4930/4930226.png"} label="Painting services" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/7277/7277419.png"} label="Wall texture & Designing" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/17901/17901183.png"} label="Waterproofing" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/6529/6529259.png"} label="Luppan (Putty work)" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/12205/12205091.png"} label="Manpower supply" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/17505/17505357.png"} label="Affordable rates" />
                        {/* <WorkIcon icon={cleanupIcon} label="Post work cleanup" /> */}
                    </div>
                </div>
            </div>


            <div className='mx-2'>
                <HeroSectionForm />
            </div>

        </div>
    );
};

export default HeroSection;

