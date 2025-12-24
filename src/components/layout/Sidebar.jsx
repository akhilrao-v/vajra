import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiBox, FiAlertCircle, FiSettings, FiFileText, FiUsers, FiHeadphones, FiLogOut } from 'react-icons/fi';
import vajraLogo from '../../assets/c.png';
import { RiDashboardFill, } from "react-icons/ri";
import { PiPulseFill } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";
import './Sidebar.scss';
import classNames from 'classnames';

const Sidebar = ({ isOpen, onClose }) => {
    const menuItems = [
        { icon: RiDashboardFill, label: 'Dashboard', path: '/' },
        { icon: PiPulseFill, label: 'Assets', arrow: FaAngleDown, path: '/assets' },
        { icon: VscTools, label: 'Incidents', path: '/incidents' },
        { icon: FiSettings, label: 'Services', path: '/services' },
        { icon: FiFileText, label: 'Request', path: '/request' },
        { icon: FiUsers, label: 'Users', arrow: FaAngleDown, path: '/users' },
        { icon: FiFileText, label: 'Reports', arrow: FaAngleDown, path: '/reports' },
    ];

    return (
        <>
        <div className={classNames('mobile-overlay', { open: isOpen })} onClick={onClose}></div>
        <aside className={classNames('sidebar', { open: isOpen })}>
            <div className="brand">
                <img src={vajraLogo} alt="Vajra" className="vajra-logo" />
            </div>
            <ul className="menu">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>
                            <item.icon />
                            <span>{item.label}</span>
                            {item.arrow && <item.arrow />}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="sidebar-footer">
                <button><FiHeadphones /> Contact us</button>
                <button><FiLogOut /> Log Out</button>
            </div>
        </aside>
        </>
    );
};

export default Sidebar;