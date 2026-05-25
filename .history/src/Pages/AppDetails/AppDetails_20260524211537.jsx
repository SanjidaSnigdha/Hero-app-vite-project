import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp=data.find(app=>app.id===appId);
    const { image,title, companyName, description } = singleApp;
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='flex gap-8'>
                <img className='w-48 rounded' src={image} alt=""/>
                <div>
                      <h1 className='text-center mt-10 font-bold text-[35px] text-[#001931]'style={{fontFamily: "Inter, sans-serif"}}></h1>

                    <p>Developed by {companyName}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;