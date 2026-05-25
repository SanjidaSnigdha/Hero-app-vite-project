import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp=data.find(app=>app.id===appId);
    const
    return (
        <div>
            <h1>App details</h1>
        </div>
    );
};

export default AppDetails;