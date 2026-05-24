import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrustedPart from '../../Components/TrustedPart/TrustedPart';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='<h1 className='text-center mt-10 font-bold tex'>
            <Banner></Banner>
            <TrustedPart></TrustedPart>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;