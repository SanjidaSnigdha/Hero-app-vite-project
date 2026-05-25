import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const singleApp=data.find()
    return (
        <div>
            <h1>App details</h1>
        </div>
    );
};

export default AppDetails;