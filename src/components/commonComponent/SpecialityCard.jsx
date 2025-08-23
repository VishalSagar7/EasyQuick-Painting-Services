import React from 'react'
import { Paintbrush, PaintRoller, Clock9 } from 'lucide-react';

const SpecialityCard = ({ speciality }) => {


  return (
    <div className=' h-[140px] md:w-[500px] px-2 md:px-4 py-2 border border-white  md:p-3 bg-white text-black rounded-lg transition-transform duration-100  flex  gap-2 md:gap-2'>

      <div className='h-full w-1/4 flex items-center justify-center'>
        <img className='h-15' src={speciality?.logo} alt="" />
      </div>

      <div className='h-full w-3/4 flex flex-col justify-center'>
        <h1 className=' uppercase text-lg md:text-xl text-left' >{speciality?.heading}</h1>
        <p className=' text-left text-base  md:text-md'>{speciality?.description}</p>
      </div>
    </div>
  )
}

export default SpecialityCard;
