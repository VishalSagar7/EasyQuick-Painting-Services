import React from 'react';

const WorkIcon = ({ icon, label }) => {
    return (
        <div className=" md:h-full py-1  md:w-full flex flex-col  items-center text-center ">
            <div className=" h-8 w-8 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                <img className='transform transition duration-100 hover:scale-[105%]' src={icon} alt={label} />
            </div>
            <p className="mt-1 md:mt-2 text-md font-normal md:text-lg md:font-medium text-[#620d19] leading">{label}</p>
        </div>
    );
};

export default WorkIcon;
