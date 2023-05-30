import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from './button/NavButton';

export default function Navbar({ language, onLanguageChange }) {
    const handleLanguageClick = (selectedLanguage) => {
        if (typeof onLanguageChange === 'function') {
            onLanguageChange(selectedLanguage);
        }
    };

    return (
        <nav>
            <div className="left">
                <Link to="../Home" className="main-logo"></Link>
            </div>
            <div className="right">
                <button onClick={() => handleLanguageClick('Kor')}>Kor</button>
                <button onClick={() => handleLanguageClick('Eng')}>Eng</button>
                <NavButton />
            </div>
        </nav>
    );
}
