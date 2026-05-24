import React, { use } from 'react';


const SingleApp = ({trendingApp}) => {
    const {image , title, downloads, ratings} = trendingApp;
   
    return (
        <div class="$$card bg-base-100 w-96 shadow-sm border">
  <figure className='p-2 rounded bg-[#D9D9D9]/40 w-2/3 mx-auto'>
    <img className='h-[196px]'
      src={image}
      alt="apps" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title font-medium">
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