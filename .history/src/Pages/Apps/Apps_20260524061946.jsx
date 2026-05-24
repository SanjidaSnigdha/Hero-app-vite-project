import React, { Suspense, useEffect, useState } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const Apps = ({data}) => {
    const [apps , setApps] = useState([]);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center mt-10 font-bold text-[30px] text-[#001931]'style={{fontFamily: "Inter, sans-serif"}}>Trending Apps</h1>
            <p className='font-normal text-[#627382] text-[15px] text-center'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span>loading.....</span>}>
            {
                data.map((trendingApp)=><SingleApp key={}></SingleApp>)
            }
            </Suspense>
           
            
        </div>
    );
};

export default Apps;