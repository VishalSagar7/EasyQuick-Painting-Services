import React from 'react'

const FullHomePaintingCard = ({ item, idx }) => {

    const { title, types } = item;

    return (

        <div key={idx} className='px-4 md:px-8 py-4 '>
            <h1 className="text-[1.4rem]  md:text-[2rem] font-medium text-black capitalize text-center relative inline-block leading-12">
                {title}
            </h1>

            {
                types?.map((type, idx) => {
                    return (
                        <div key={idx} className='h-[220px] md:h-[200px] flex gap-2 border-b-[0.1px] border-gray-300 pt-4  '>
                            <div className=' w-[70%] md:w-[65%] text-black '>
                                <h2 className='font-semibold text-lg'>{ type?.heading }</h2>
                                <p className='font-semibold'>Starts at ₹{ type?.price }</p>
                                <hr className='my-4 border-dashed border-gray-300' />
                                <p className='text-gray-700 text-sm'>{ type?.description }</p>
                                <p className='text-[#8a0136] cursor-pointer my-2 font-semibold text-md'>View details & estimate</p>
                            </div>
                            <div className=' w-[30%] md:w-[35%] flex justify-end items-center md:items-start '>
                                <img
                                    src={type?.image} alt=""
                                    className='h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-md object-center object-cover'
                                />
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default FullHomePaintingCard;


