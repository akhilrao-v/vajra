import React from 'react';
import { FiMenu, FiGrid, FiBell, FiUser, FiArrowLeft } from 'react-icons/fi';
import { RiDashboardFill, } from "react-icons/ri";

import vajraLogo from '../../assets/c.png';
import './Header.scss';
import { BsFillBellFill } from 'react-icons/bs';

const Header = ({ onToggleSidebar }) => {
    return (
        <header className="top-header">
            <div className="left-side">
                <button className="back-btn">
                    <FiArrowLeft size={20} />
                </button>
                <button className="menu-toggle" onClick={onToggleSidebar}>
                    <FiMenu size={24} />
                </button>
                <img src={vajraLogo} alt="Vajra" className="header-logo" />
                <div className="breadcrumbs">
                    <h2 className="text-dark">Reports </h2>
                    <span className="text-blue"> / Bio Medical</span>
                </div>
            </div>
            <div className="right-side">
               <div className="profile-pill">
                   <span className="role">NB</span>
                   <span>Non Bio Medical</span>
               </div>
               <select className="location-select">
                   <option className='opt'>Vijayanagar</option>
               </select>
               <button className="icon-btn"><RiDashboardFill /></button>
               <button className="icon-btn"><BsFillBellFill /><span className="dot"></span></button>
               <button className="icon-btn user-btn">A</button>
            </div>
        </header>
    );
};

export default Header;