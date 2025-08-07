import React from 'react'

const OneStep = ({ step }) => {




    return (
        <div className='h-[150px] md:h-[270px] w-[110px] md:w-[200px] bg-white shadow'>
            <div className=' h-[100px] md:h-[200px] w-full overflow-hidden'>
                <img
                    className='w-full h-[200px] transition-transform duration-200 hover:scale-[102%] '
                    src={ step?.img } alt=""
                />
            </div>
            <p className='text-gray-700 text-sm md:text-lg text-center px-1 md:mt-2 capitalize'>
                {step?.description}
            </p>
        </div>
    )
}

export default OneStep;
