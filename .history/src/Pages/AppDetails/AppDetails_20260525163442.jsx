import React from 'react';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { IoIosStarOutline } from "react-icons/io";
import { TbFileLike } from "react-icons/tb";



import { useLoaderData, useParams } from 'react-router';
import { Line, LineChart } from 'recharts';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp=data.find(app=>app.id===appId);
    const { image,title, companyName,size, downloads, description, reviews, ratings, ratingAvg } = singleApp;
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='flex gap-8'>
                <img className='w-54 h-54 rounded mt-10' src={image} alt=""/>
                <div>
                <h1 className='text-center mt-8 font-bold text-[35px] text-[#001931]'style={{fontFamily: "Inter, sans-serif"}}>{title}</h1>

             <p>Developed by <span className='bg-gradient-to-r from-[#632EEF] to-[#9F62F2] text-transparent bg-clip-text font-bold'>{companyName}</span></p>
               <div className="divider"></div>
               {/*  */}
                <div className='items-center justify-center text-center'>
                    <div className='flex justify-center items-center text-center gap-50 mb-3'>
                        <span className='text-[#54CF68] text-3xl'><PiDownloadSimpleBold />
                        </span>
                        <span className='text-[#FF8811] text-3xl'><IoIosStarOutline /></span>
                 <span className='text-3xl text-[#632EE3]'><TbFileLike />
</span>
            </div>
            <div className='flex justify-center items-center text-center gap-40 font-normal text-[16px] text-[#001931]'>
               <p>Downloads</p> 
               <p>Average</p>
               <p>Total Reviews</p>

            </div>
            <div className='flex justify-center items-center text-center font-extrabold text-[40px] text-[#001931] gap-30'>
                <h1>{downloads}</h1>
                <h1>{ratingAvg}</h1>
                <h1>{reviews}</h1>
            </div>
            
             <button className='btn bg-[#00D390] rounded text-[#FFFFFF] mt-6 mb-5'>Install Now <span>{(size)}</span></button>
              </div>
              </div>
            </div>
 <div className="divider"></div>
 {/* ratings */}
 <div>
    <h1 className='font-semibold text-2xl text-[#001931]' style={{fontFamily: "Inter, sans-serif"}}>Ratings</h1>
    <div>
        <LineChart width={500} height={500}'>
         <Line dataKey="name"></Line>
        </LineChart>
    </div>
 </div>
 </div>
    );
};

export default AppDetails;