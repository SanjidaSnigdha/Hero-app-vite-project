import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrustedPart from '../../Components/TrustedPart/TrustedPart';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='bg-gradient-to-r from-[#632EE3]/8 to-[#9F62F2]/8'>
            <Banner></Banner>
            <TrustedPart></TrustedPart>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;