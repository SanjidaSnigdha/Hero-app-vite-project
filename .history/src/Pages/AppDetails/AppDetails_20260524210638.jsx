import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp=data.find(app=>app.id===appId);
    const { image,title, companyName, description } = singleApp;
    return (
        <div>
            <div>
                im
            </div>
        </div>
    );
};

export default AppDetails;