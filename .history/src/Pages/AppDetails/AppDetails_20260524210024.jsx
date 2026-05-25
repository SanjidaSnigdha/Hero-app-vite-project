import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams();
    const app
    const data = useLoaderData();
    const singleApp=data.find(app=>app.id===id);
    console.log(singleApp)
    return (
        <div>
            <h1>App details</h1>
        </div>
    );
};

export default AppDetails;