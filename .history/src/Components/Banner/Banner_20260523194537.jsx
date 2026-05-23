import React from 'react';
import bannerImg from '../../assets/hero copy.png'

const Banner = () => {
    return (
        <div className='justi'>
            <h1>We Build <br /><span>Productive</span>Apps</h1>
            <img src={bannerImg} alt="" className='w-60 h-40 items-center justify-center'/>
        </div>
    );
};

export default Banner;
