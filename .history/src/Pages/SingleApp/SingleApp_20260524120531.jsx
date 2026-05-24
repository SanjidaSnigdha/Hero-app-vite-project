import React, { use } from 'react';


const SingleApp = ({trendingApp}) => {
    const {image , title, downloads, ratings} = trendingApp;
   
    return (
        <div class="$$card  w-96 rounded border bg-[#FFFFFF]">
  <figure className='p-2 w-2/3 mx-auto'>
    <img className='h-[196px] w-[300px]'
      src={image}
      alt="apps" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title font-medium text-[15px] text-[#001931]">
      {title}
      
    </h2>
    <div class="$$card-actions justify-end">
      <div class="$$badge $$badge-outline">{downloads}</div>
      <div class="$$badge $$badge-outline">{ratings.count}</div>
    </div>
  </div>
</div>
    );
};

export default SingleApp;