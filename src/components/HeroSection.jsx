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
        <div className="w-full box-border h-[calc(100vh-110px)] overflow-x-hidden flex items-center justify-between px-12"
            style={{
                backgroundImage: `url(${labourBgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div>
                <h2 className="text-black text-4xl font-extralight  mb-4 leading-tight capitalize">
                    Transforming Walls, Elevating Spaces,
                    <br />
                    Inspiring Every View
                </h2>

                <div className=" px-8 py-6 bg-white p-4 pt-4 rounded-lg shadow">


                    <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-5 space-y-">
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

