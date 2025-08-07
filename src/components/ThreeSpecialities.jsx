import React from 'react'
import SpecialityCard from './commonComponent/SpecialityCard'
import { Paintbrush, PaintRoller, Clock9 } from 'lucide-react';

const specialitiesArray = [
    {
        heading: "Supervised Painting",
        description: "Painting your home can be challenging, which is why we offer a supervised service. Our attentive supervisor ensure that every detail is meticulously managed, providing a seamless experience for you and your family.",
        logo: <Paintbrush size={40} />
    },
    {
        heading: "Usage of mechanised tools",
        description: "The use of spray painting and mechanised sander ensures optimum utilisation of time. These mechanised tools help in achieving a smooth and high-quality finish too. This means less distruption for you and your family.",
        logo: <PaintRoller size={40} />
    },
    {
        heading: "One time completion",
        description: "We value your time and understand the importance of timely completion, which is why we are commited to delievering on-time painting services. Your project will be completed as sheduled, ensuring a smooth and hassle-free experience.",
        logo: <Clock9 size={40} />
    },

]

const ThreeSpecialities = () => {
    return (
        <div className='pb-12 px-6 space-y-6 mt-4 md:mt-0 md:px-12 md:flex justify-between  '>
            {
                specialitiesArray?.map((speciality) =>
                    <SpecialityCard speciality={speciality} />
                )
            }
        </div>
    )
}

export default ThreeSpecialities;
