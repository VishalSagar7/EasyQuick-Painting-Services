import React from 'react'
import Footer from '../components/Footer.jsx';
import { FullHomePaintDetailsArrray } from '../constants/serviceDetails.js';
import FullHomePaintingCard from '../cards/FullHomePaintingCard.jsx';
import { fullHomePaintArray } from '../constants/serviceDetails.js';

const FullHomePainting = () => {


    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -100;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };




    return (
        <div className='bg-[#FAF6F0]  w-full' >
            <div className="md:flex w-full gap-4 md:gap-8 px:6 md:px-0 py-6 md:py-12 justify-center">
                {/* LEFT */}
                <div className="  md:w-[400px] relative">
                    <div className="md:sticky md:top-[125px]">
                        <h1 className="text-[1rem] md:text-[2rem] font-medium text-black text-center mb-4">
                            Full Home Painting
                        </h1>

                        <div className=" h-[300px]  md:h-[400px] md:w-[400px] md:rounded-lg shadow bg-white grid grid-cols-3 grid-rows-3 p-2 md:px-1 md:py-4 ">
                            {fullHomePaintArray?.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-1 items-center justify-center cursor-pointer"
                                    onClick={() => handleScroll(item?.id)} // scroll to section
                                >
                                    <img
                                        className="h-[55] w-[55px] md:h-[65px] md:w-[65px] object-cover object-center rounded"
                                        src={item?.img}
                                        alt=""
                                    />
                                    <p className="text-black text-xs md:text-sm">{item?.heading}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-[600px] rounded-lg bg-white shadow ">
                    {FullHomePaintDetailsArrray?.map((item, idx) => (
                        <div key={idx} id={item.id} className="">
                            <FullHomePaintingCard item={item} idx={idx} />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default FullHomePainting;
