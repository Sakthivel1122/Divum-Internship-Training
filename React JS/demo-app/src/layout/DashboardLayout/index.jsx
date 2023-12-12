import React from 'react'
import "./DashboardLayout.scss";
import NavBar from '../../components/NavBar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='DashboardLayout'>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default DashboardLayout;