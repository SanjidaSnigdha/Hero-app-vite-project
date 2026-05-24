import React, { Suspense, useEffect, useState } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const Apps = ({data}) => {
    const [apps , setApps] = useState([]);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center mt-10 font-bold text-[30px] text-[#001931]'style={{fontFamily: "Inter, sans-serif"}}>Trending Apps</h1>
            <p className='font-normal text-[#627382] text-[15px] text-center'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span>loading.....</span>}>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 rounded-2xl'>
                {
                data.map((trendingApp)=><SingleApp key={trendingApp.id} trendingApp={trendingApp}></SingleApp>)
            }
            </div>
            </Suspense>
           
            
        </div>
    );
};

export default Apps;