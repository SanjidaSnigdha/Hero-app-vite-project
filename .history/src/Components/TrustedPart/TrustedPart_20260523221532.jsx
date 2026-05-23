import React from 'react';

const TrustedPart = () => {
    return (
        <div className='w-full h-50 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] items-center justify-center text-center'>
            <h1 className='p-8 font-bold text-[25px]' style={{fontFamily: "Inter, sans-serif"}}>Trusted by Millions, Built for You</h1>
            <div className='flex justify-center items-center text-center gap-4font-normal text-[16px] text-[#FFFFFF]'>
               <p>Total Downloads</p> 
               <p>Total Reviews</p>
               <p>Active Apps</p>

            </div>
        </div>
    );
};

export default TrustedPart;