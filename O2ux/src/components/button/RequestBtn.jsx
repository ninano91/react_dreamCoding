import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RequestBtn() {
    return (
        <Link to={Home} className="o-btn btn-request">
            <div className="text">REQUEST PROJECTS</div>
            <div className="icon">
                <FontAwesomeIcon icon="fa-thin fa-hat-cowboy" />
            </div>
        </Link>
    );
}
