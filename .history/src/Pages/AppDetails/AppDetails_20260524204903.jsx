import React from 'react';
import { useParams } from 'react-router';

const AppDetails = () => {
    const id = useParams();
    console.log(id)
    return (
        <div>
            <h1>App details</h1>
        </div>
    );
};

export default AppDetails;