import React from 'react';
 import bannerImg from '../../assets/hero copy.png'


const Banner = () => {
    return (
        <div className='justify-center items-center text-center flex flex-col mt-1 bg-base-300'>
            <h1 className='mt-10 text-3xl font-bold  text-[#001931]' style={{fontFamily: "Inter, sans-serif"}}>We Build <br /><span className="bg-gradient-to-r from-[#632EEF] to-[#9F62F2] text-transparent bg-clip-text">
   Productive</span>  Apps</h1>
   <p className="text-[#627382] text-[20px] font-normal">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
      <img src={bannerImg} alt="" className='w-50  mt-8'/>

            
        </div>
    );
};

export default Banner;