import React, { useState } from 'react';
import './GnbWrap.css';
import GnbFooterlist from '../list/GnbFooterlist';
import { Link } from 'react-router-dom';

export default function GnbWrap() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleWrap = () => {
        const btnMenu = document.querySelector('.btn-menu');
        const gnbWrap = document.querySelector('.gnb-wrap');
        btnMenu.classList.remove('close');
        gnbWrap.classList.remove('on');
        setIsOpen();
    };

    return (
        <div className={`gnb-wrap ${isOpen ? 'on' : ''}`}>
            <div className="gnb-wrap-top">
                <div className="gnb-list">
                    <div className="gnb-item">
                        <Link to="../../About" onClick={toggleWrap}>
                            About
                        </Link>
                    </div>
                    <div className="gnb-item">
                        <Link to="../../Portfolio" onClick={toggleWrap}>
                            Portfolio
                        </Link>
                    </div>
                    <div className="gnb-item">
                        <Link to="../../Story" onClick={toggleWrap}>
                            Story
                        </Link>
                    </div>
                    <div className="gnb-item">
                        <Link to="../../Contact" onClick={toggleWrap}>
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="footer">
                    <GnbFooterlist />
                </div>
            </div>
        </div>
    );
}
