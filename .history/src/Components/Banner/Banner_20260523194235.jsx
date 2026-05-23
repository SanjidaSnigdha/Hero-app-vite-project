import React from 'react';
import bannerImg from '../../assets/hero copy.png'

const Banner = () => {
    return (
        <div>
            <img src={bannerImg} alt="" className='w-60 h-40 items-center'/>
        </div>
    );
};

export default Banner;
