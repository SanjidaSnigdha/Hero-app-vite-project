import React from 'react';
import { FaGithub } from "react-icons/fa";
import NavImg from '../../assets/logo.png'
import { Link } from 'react-router';
const Navbar = () => {
  const links = (
    <>
  <li className="m-2 font-medium text-[#000000]/90">Home</li>
<Lin
 <li className="m-2 font-medium text-[#000000]/90">Installation</li>
  </>
  );

    return (
  <div className="navbar bg-base-100 w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
   {links}
      </ul>
    </div>
    <div className='flex'>
        <img src={NavImg} alt="" className='w-10 h-10' />
            <a className="btn btn-ghost text-xl text-gradient-to-r from-[#632EEF] to-[#9F62F2]">HERO.IO</a>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a
    href="https://github.com/SanjidaSnigdha/Hero-app-vite-project.git" 
    target="_blank"
    rel="noopener noreferrer"
    className="btn flex items-center gap-2 rounded bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF]"
  >
    <FaGithub className="text-lg"/>
    Contribute
  </a>

  </div>
</div>
    );
  };

export default Navbar;