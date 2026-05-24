import React, { useEffect, useState } from 'react';

const Apps = () => {
    const [apps , setApps] = useState([]);
//     useEffect(() => {
//    fetch("appsData.json")
//    .then(res=>res.json())
//    .then(data => {
//     console.log(data)
//    })
//     },[])

const appPromise=fetch('./a')
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center mt-10 font-bold text-[30px] text-[#001931]'style={{fontFamily: "Inter, sans-serif"}}>Trending Apps</h1>
            <p className='font-normal text-[#627382] text-[15px] text-center'>Explore All Trending Apps on the Market developed by us</p>
            
        </div>
    );
};

export default Apps;