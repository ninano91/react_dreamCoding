import React from 'react';
import '../style/css/css/reset.css';
import '../style/css/css/common.css';

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import GnbWrap from '../components/layout/GnbWrap';

export default function Root() {
    return (
        <div className="body-bg">
            <GnbWrap />
            <div className="content-wrap">
                <Navbar />
                <Outlet />
            </div>
            <span>Root</span>
        </div>
    );
}
