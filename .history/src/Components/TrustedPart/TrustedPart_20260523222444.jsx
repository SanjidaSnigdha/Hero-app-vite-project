import React from 'react';

const TrustedPart = () => {
    return (
        <div className='w-full h-80 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] items-center justify-center text-center'>
            <h1 className='p-10 font-bold text-[25px]' style={{fontFamily: "Inter, sans-serif"}}>Trusted by Millions, Built for You</h1>
            <div className='flex justify-center items-center text-center gap-40 font-normal text-[16px] text-[#FFFFFF]'>
               <p>Total Downloads</p> 
               <p>Total Reviews</p>
               <p>Active Apps</p>

            </div>
            <div className='flex justify-center items-center text-center font-extrabold text-[64px] text-[#FFFFFF] gap-25'>
                <h1>29.6M</h1>
                <h1>906K</h1>
                <h1>132+</h1>
            </div>
            <div className='flex justify-center items-center text-center gap-25 font-normal text-[16px] text-[#FFFFFF]'>
               <p>21% more than last month</p> 
               <p>46% more than last month</p>
               <p>31 more will Launch</p>

            </div>
            
        </div>
    );
};

export default TrustedPart;