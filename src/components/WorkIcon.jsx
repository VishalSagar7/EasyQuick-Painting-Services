import React from 'react';

const WorkIcon = ({ icon, label }) => {
    return (
        <div className=" md:h-full md:w-full flex flex-col p-1 items-center text-center ">
            <div className=" h-10 w-10 md:w-10 md:h-10 rounded-full flex items-center justify-center">
                <img className='transform transition duration-100 hover:scale-[105%]' src={icon} alt={label} />
            </div>
            <p className="mt-2 text-sm md:text-base text-black font-normal">{label}</p>
        </div>
    );
};

export default WorkIcon;
