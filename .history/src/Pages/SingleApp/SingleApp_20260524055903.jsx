import React, { use } from 'react';

const SingleApp = () => {
    const data = use(appPromise);
    console.log(data)
    return (
        <div>
            Single app
        </div>
    );
};

export default SingleApp;