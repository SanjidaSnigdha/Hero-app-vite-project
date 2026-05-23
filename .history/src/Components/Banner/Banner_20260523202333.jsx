import React from 'react';
import bannerImg from '../../assets/hero copy.png'

const Banner = () => {
    return (
        <div className='justify-center items-center text-center flex flex-col mt-1 bg-base-300'>
            <h1 className='mt-10 text-3xl font-bold Int text-[#001931] '>We Build <br /><span>Productive </span>Apps</h1>
            <img src={bannerImg} alt="" className='w-60 h-40'/>
        </div>
    );
};

export default Banner;
