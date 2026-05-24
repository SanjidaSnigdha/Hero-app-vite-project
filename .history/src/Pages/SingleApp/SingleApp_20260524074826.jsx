import React, { use } from 'react';


const SingleApp = ({trendingApp}) => {
    const {image , title, downloads, ratings} = trendingApp;
   
    return (
        <div class="$$card bg-base-100 w-96 shadow-sm border">
  <figure className='p-4 rounded bg-[#D9D9D9]/40 w'>
    <img className='h-[166px]'
      src={image}
      alt="apps" />
  </figure>
  <div class="$$card-body">
    <h2 class="$$card-title">
      {title}
      <div class="$$badge $$badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="$$card-actions justify-end">
      <div class="$$badge $$badge-outline">{downloads}</div>
      <div class="$$badge $$badge-outline">{ratings.count}</div>
    </div>
  </div>
</div>
    );
};

export default SingleApp;