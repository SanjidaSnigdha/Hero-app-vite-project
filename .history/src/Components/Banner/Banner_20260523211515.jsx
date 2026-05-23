import React from 'react';
import { FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
 import bannerImg from '../../assets/hero copy.png'


const Banner = () => {
    return (
        <div className='justify-center items-center text-center flex flex-col mt-1 bg-base-300'>
            <h1 className='mt-10 text-3xl font-bold  text-[#001931]' style={{fontFamily: "Inter, sans-serif"}}>We Build <br /><span className="bg-gradient-to-r from-[#632EEF] to-[#9F62F2] text-transparent bg-clip-text">
   Productive</span>  Apps</h1>
   <p className="text-[#627382] text-[20px] font-normal">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
   <div className="flex items-center justify-center gap-1">
  <a
  href="https://play.google.com/store/apps/details?id=com.yourapp.package"
  target="_blank"
  rel="noopener noreferrer"
  className="btn flex items-center gap-2 rounded bg-[#D2D2D2] text-"
>
  <SiGoogleplay className="text-lg" />
  Install on Play Store
</a>
<a
  href="https://apps.apple.com/app/idYOUR_APP_ID"
  target="_blank"
  rel="noopener noreferrer"
  className="btn flex items-center gap-2 rounded text-[#FFFFFF]"
>
  <FaApple className="text-lg" />
  Download on App Store
</a>
   </div>
      <img src={bannerImg} alt="" className='w-190 h-90 mt-10'/>

            
        </div>
    );
};

export default Banner;