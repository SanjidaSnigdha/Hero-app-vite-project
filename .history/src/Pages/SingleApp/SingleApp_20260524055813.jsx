import React, { use } from 'react';

const SingleApp = ({appPromise}) => {
    const data = use(appPromise);
    console.log()
    return (
        <div>
            Single app
        </div>
    );
};

export default SingleApp;