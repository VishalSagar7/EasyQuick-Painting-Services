import React from 'react'

const Heading = ({text}) => {
    return (
        <div className='w-full h-10 flex justify-center mb-12'>
            <h1 className="text-[3rem] text-black capitalize text-center relative inline-block font-light px-2">
                {text}
                {/* <span className="absolute left-1/2 -translate-x-1/2 bottom-[-25px] w-1/2 h-[4px] bg-[#A00B43] z-10 rounded"></span> */}
            </h1>
      </div>
  )
}

export default Heading
