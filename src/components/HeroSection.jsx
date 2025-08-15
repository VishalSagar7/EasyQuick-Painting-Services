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
        <div className="w-full box-border h-[calc(100vh-110px)] overflow-x-hidden flex items-center justify-between px-6 md:px-12"
            style={{
                backgroundImage: `url(${labourBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className='h-full w-full md:w-1/2 md:h-full md:flex md:flex-col md: justify-center pt-8 '>
                <h2 className="text-black text-[1.5rem] md:text-4xl font-extralight  mb-4 leading-tight capitalize">
                    Transforming Walls, Elevating Spaces,
                    <br />
                    Inspiring Every View
                </h2>

                <div className=" h-auto w-full md:h-auto md:w-auto md:px-8 md:py-6 bg-white md:p-4 md:pt-4 rounded-lg shadow">


                    <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:gap-2 md:mt-5 space-y-2 py-6">
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

