import React, { use } from 'react';


const SingleApp = ({trendingApp}) => {
    const {image , title, downloads, ratingAvg} = trendingApp;
   
    return (
        <div class="$$card  w-85 rounded-xl bg-[#FFFFFF]">
  <figure className='p-5 w-2/3 mx-auto'>
    <img className='h-[200px] w-[280px]'
      src={image}
      alt="apps" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title font-medium text-[15px] text-[#001931] p-4">
      {title}
      
    </h2>
    <div class="$$card-actions justify-end p-4">
      <div class="$$badge $$badge-outline">{downloads}</div>
      <div class="$$badge $$badge-outline">{ratingAvg}</div>
    </div>
  </div>
</div>
    );
};

export default SingleApp;