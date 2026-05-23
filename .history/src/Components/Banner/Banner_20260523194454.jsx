import React from 'react';
import bannerImg from '../../assets/hero copy.png'

const Banner = () => {
    return (
        <div>
            <h1>We Build <br /><span>Pro</span></h1>
            <img src={bannerImg} alt="" className='w-60 h-40 items-center justify-center'/>
        </div>
    );
};

export default Banner;
