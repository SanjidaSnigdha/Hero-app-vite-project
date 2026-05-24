import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet className='bg-gradient-to-r from-[#632EE3]/8 to-[#9F62F2]/8'>

            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;