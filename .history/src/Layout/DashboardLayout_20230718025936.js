import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer  lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content className='bg-[#F4F7FC]' ">
                    <Outlet className='bg-[#F4F7FC]'></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">
                        <li><Link to="/dashboard/book">Book</Link></li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;