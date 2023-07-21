import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ScrollRestoration></ScrollRestoration>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;