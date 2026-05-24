import React, { use } from 'react';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router';

const SingleApp = ({trendingApp}) => {
    const {image , title, downloads, ratingAvg} = trendingApp;
   
    return (
      <Link to={`/appDetails/${}`}>
        <div className="$$card  w-85 rounded-xl bg-[#FFFFFF]">
  <figure className='p-5 w-2/3 mx-auto'>
    <img className='h-[200px] w-[280px]'
      src={image}
      alt="apps" />
  </figure>
  <div className="$$card-body">
    <h2 className="$$card-title font-medium text-[15px] text-[#001931] p-4">
      {title}
      
    </h2>
    <div className="$$card-actions justify-between p-4 flex">
      <div className="$$badge $$badge-outline flex gap-1 text-[#00D390] font-medium text-[16px] items-center bg-[#F1F5E8] rounded p-1"><span><PiDownloadSimpleBold />
</span>{downloads}</div>
      <div className="$$badge $$badge-outline flex gap-1  text-[#FF8811] font-medium text-[16px] items-center bg-[#FFF0E1] rounded p-1"><span><IoIosStarOutline />
</span>{ratingAvg}</div>
    </div>
  </div>
</div>
      </Link>
    );
};

export default SingleApp;