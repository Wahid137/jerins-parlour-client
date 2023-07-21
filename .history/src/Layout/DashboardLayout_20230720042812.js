import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import bookingList from '../assets/icons/booking_list.png';
import review from '../assets/icons/review.png'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer  lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F4F7FC]">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">
                        <li><Link to="/dashboard"><img className="w-5" src={bookingList} alt="booking list" />Booking List</Link></li>
                        <li><Link to="/dashboard/review"><img className="w-5" src={review} alt="booking list" />Review</Link></li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;