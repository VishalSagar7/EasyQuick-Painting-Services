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
import herobg from "../assets/herobg.jpg"


const HeroSection = () => {
    return (
        <div className="w-full box-border md:h-[calc(100vh-85px)] overflow-x-hidden md:flex items-center pb-6 md:pb-0 justify-between md:px-12"
            style={{
                // backgroundImage:
                //     "url('https://t4.ftcdn.net/jpg/04/77/93/81/240_F_477938186_YaMOjJGbp8H8hAB9NxvHzsGS4ZmJyNIo.jpg')",
                backgroundImage: `url(${herobg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className=' w-full  md:w-[700px] md:h-full md:flex md:flex-col md:justify-center '>
                <h2 className="mx-2 text-[20px] md:text-[2.5rem] my-3 text-[#620d19] font-normal md:font-light mt:0  md:mb-3 leading-tight capitalize">
                    Transforming Walls, Elevating Spaces,
                    <br className='hidden md:block' />
                    Inspiring Every View.
                </h2>

                <div className=" h-auto w-full md:h-auto md:w-auto md:pt-6  px-2 md:pb-2 bg-white pt-3  md:rounded-lg shadow">


                    <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:gap-0 space-y-3 md:space-y-6  md:pt-0 md:py-0">

                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/18681/18681635.png"} label="Painting services" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/18599/18599350.png"} label="Wall texture & Designing" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/11590/11590159.png"} label="Waterproofing" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/17911/17911581.png"} label="Luppan (Putty work)" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/14459/14459553.png"} label="Manpower supply" />
                        <WorkIcon icon={"https://cdn-icons-png.flaticon.com/128/17505/17505257.png"} label="Affordable rates" />

                        {/* <WorkIcon icon={cleanupIcon} label="Post work cleanup" /> */}
                    </div>
                </div>
            </div>


            <div className='mx-4'>
                <HeroSectionForm />
            </div>

        </div>
    );
};

export default HeroSection;

