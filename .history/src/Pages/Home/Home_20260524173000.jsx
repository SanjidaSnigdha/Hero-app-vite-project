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
            <Apps data={data.slice(0,8)}></Apps>
            {/* <button className="btn w-38 mx-auto flex items-center justify-center rounded bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] mt-6 mb-6">
     Show All
     </button> */}
      <div className='flex justify-center'>
                <Link to="/allapps">
                    <button className="btn rounded bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-6 mb-6">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;