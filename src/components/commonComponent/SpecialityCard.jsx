import React from 'react'
import { Paintbrush, PaintRoller, Clock9 } from 'lucide-react';

const SpecialityCard = ({ speciality }) => {


  return (
      <div data-aos="fade-right" className='md:h-[350px] md:w-[400px] px-8 py-4  md:p-6 bg-[#ad1952] rounded-lg transition-transform duration-100  text-white shadow-md flex flex-col items-center gap-2 md:gap-4'>
          {speciality?.logo }
          <h1 className=' uppercase text-xl md:text-2xl underline font-mono'>{ speciality?.heading }</h1>
          <p className=' text-center text-base  md:text-md'>{ speciality?.description }</p>
      </div>
  )
}

export default SpecialityCard;
