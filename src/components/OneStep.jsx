import React from 'react'

const OneStep = ({ step }) => {




    return (
        <div className='h-[270px] w-[200px] bg-white shadow'>
            <div className=' h-[200px] w-full overflow-hidden'>
                <img
                    className='w-full h-[200px] transition-transform duration-200 hover:scale-[102%] '
                    src={ step?.img } alt=""
                />
            </div>
            <p className='text-gray-700 text-lg text-center mt-2 capitalize'>
                {step?.description}
            </p>
        </div>
    )
}

export default OneStep;
