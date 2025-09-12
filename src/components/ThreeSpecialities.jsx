import React from 'react'
import SpecialityCard from './commonComponent/SpecialityCard'
import { Paintbrush, PaintRoller, Clock9 } from 'lucide-react';
import supervisedLogo from "../assets/icons/supervision.png"
import toolLogo from "../assets/icons/tool.png"
import clock from "../assets/icons/clock.png"
import specialitybg from "../assets/specialitybg.jpg"

const specialitiesArray = [
    {
        heading: "Supervised Painting",
        description: "Every project is carefully supervised for a seamless experience.",
        logo: supervisedLogo
    },
    {
        heading: "Usage of mechanised tools",
        description: "Advanced tools ensure a smooth, high-quality finish in less time.",
        logo: toolLogo
    },
    {
        heading: "One time completion",
        description: "We guarantee on-time completion for a hassle-free experience.",
        logo: clock
    },
]


const ThreeSpecialities = () => {
    return (
        <div className='px-4 py-3 md:py-4 mb-12 md:mt-0 md:px-12 flex-col md:flex-row space-y-3 md:space-y-0 md:flex justify-center md:gap-4 bg-gradient-to-r'
                    style={{
                        // backgroundImage:
                        //     "url('https://t4.ftcdn.net/jpg/04/77/93/81/240_F_477938186_YaMOjJGbp8H8hAB9NxvHzsGS4ZmJyNIo.jpg')",
                        backgroundImage: `url(${specialitybg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
        >

            {
                specialitiesArray?.map((speciality) =>
                    <SpecialityCard speciality={speciality} />
                )
            }
        </div>
    )
}

export default ThreeSpecialities;
