import React from 'react'

const BackgroundBanner = ({ heading, imgAddress }) => {

    console.log("heading", heading);
    console.log("imgAddress", imgAddress);
    
    
    return (
        <div className='w-full bg-white h-[120px] px-10 flex items-center justify-center'
            style={{
                background: `url(${imgAddress})`, backgroundSize: "cover", backgroundPosition: "center"
            }}
        >
            <h1 className='text-white text-[2rem] font-bold '>{ heading }</h1>
        </div>
    )
}

export default BackgroundBanner;
