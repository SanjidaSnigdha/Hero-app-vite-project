import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrustedPart from '../../Components/TrustedPart/TrustedPart';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='<h1 className='text-center mt-10 font-bold text-[30px] text-[#001931]'style={{fontFamily: "Inter, sans-serif"}}>Trending Apps</h1>
            <p className='font-normal text-[#627382] text-[15px] text-center'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span>loading.....</span>}>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                data.map((trendingApp)=><SingleApp key={trendingApp.id} trendingApp={trendingApp}></SingleApp>)
            }
            </div>
            </Suspense>'>
            <Banner></Banner>
            <TrustedPart></TrustedPart>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;