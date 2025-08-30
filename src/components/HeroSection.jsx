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
        <div className="w-full box-border h-[calc(100vh-110px)] overflow-x-hidden flex items-center justify-between px-4 md:px-12"
            style={{
                backgroundImage: `url(${labourBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className='h-full w-full md:w-[700px] md:h-full md:flex md:flex-col md:justify-center '>
                <h2 className="text-black text-[1.5rem] md:text-[2.5rem] font-light my-4 mt:0  md:mb-3 leading-tight capitalize">
                    Transforming Walls, Elevating Spaces,
                    <br />
                    Inspiring Every View
                </h2>

                <div className=" h-auto w-full md:h-auto md:w-auto md:pt-6 pb-2 md:pb-2 bg-white  rounded-lg shadow">


                    <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:gap-0 md:space-y-6 pt-4 md:pt-0 md:py-0">
                        <WorkIcon icon={paintbrushIcon} label="Painting services" />
                        <WorkIcon icon={texture} label="Wall texture & Designing" />
                        <WorkIcon icon={waterproofing} label="Waterproofing" />
                        <WorkIcon icon={putty} label="Luppan (Putty work)" />
                        <WorkIcon icon={workersIcon} label="Manpower supply" />
                        <WorkIcon icon={affordablerates} label="Affordable rates" />
                        {/* <WorkIcon icon={cleanupIcon} label="Post work cleanup" /> */}
                    </div>
                </div>
            </div>


            <HeroSectionForm />

        </div>
    );
};

export default HeroSection;

