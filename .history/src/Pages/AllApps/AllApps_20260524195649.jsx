import React from 'react';
import { useLoaderData } from 'react-router';

const AllApps = () => {
    const data = useLoaderData()
    return (
        <div>
  <h1 className='text-center mt-10 font-bold text-[35px] text-[#001931]'style={{fontFamily: "Inter, sans-serif"}}>Our All Applications</h1>
 <p className='font-normal text-[#627382] text-[15px] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>


        </div>
    );
};

export default AllApps;
