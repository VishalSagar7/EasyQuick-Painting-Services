import React from 'react'
import { Paintbrush, PaintRoller, Clock9 } from 'lucide-react';

const SpecialityCard = ({ speciality }) => {


  return (
      <div data-aos="fade-right" className='h-[350px] w-[400px] p-6 bg-[#8a0136] rounded-lg transition-transform duration-100 hover:bg-[#8a0135f1] text-white shadow-md flex flex-col items-center gap-4'>
          {speciality?.logo }
          <h1 className=' uppercase text-2xl underline font-mono'>{ speciality?.heading }</h1>
          <p className=' text-center text-md'>{ speciality?.description }</p>
      </div>
  )
}

export default SpecialityCard;
