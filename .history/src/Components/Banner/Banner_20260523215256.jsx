import React from 'react';
import { FaApple } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
 import bannerImg from '../../assets/hero copy.png'


const Banner = () => {
    return (
        <div className='justify-center items-center text-center flex flex-col mt-1 bg-gradient-to-r from-[#632EE3]/8 to-[#9F62F2]/8'>
            <h1 className='mt-10 text-3xl font-bold  text-[#001931]' style={{fontFamily: "Inter, sans-serif"}}>We Build <br /><span className="bg-gradient-to-r from-[#632EEF] to-[#9F62F2] text-transparent bg-clip-text">
   Productive</span>  Apps</h1>
   <p className="text-[#627382] text-[20px] font-normal mt-4">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact. </p>
   <div className="flex items-center justify-center gap-2">
  <a
  href="https://play.google.com/store/apps/details?id=com.yourapp.package"
  target="_blank"
  rel="noopener noreferrer"
  className="btn flex items-center gap-2 rounded font-bold text-[#001931] p-2 mt-6"
>
  <SiGoogleplay className="text-lg text-gradient-to-r from-[#632EE3] to-[#9F62F2]" />
  Google Play
</a>
<a
  href="https://apps.apple.com/app/idYOUR_APP_ID"
  target="_blank"
  rel="noopener noreferrer"
  className="btn flex items-center gap-2 rounded text-[#001931 font-bold] mt-6 p-2"
>
  <FaApple className="text-lg" />
  Download on App Store
</a>
   </div>
      <img src={bannerImg} alt="" className='w-190 h-90 mt-10'/>
      {/* Trusted part */}
      <div className='w-full h-60 bg-gradient-to-r from-[#632EE3] to-['>

      </div>

            
        </div>
    );
};

export default Banner;