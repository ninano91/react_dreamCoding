import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import { FiArrowRightCircle } from 'react-icons/fi';

export default function RequestBtn() {
    return (
        <Link to={Home} className="o-btn btn-request">
            <div className="text">REQUEST PROJECTS</div>
            <div className="icon">
                <FiArrowRightCircle />
            </div>
        </Link>
    );
}
