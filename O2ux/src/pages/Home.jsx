import React, { useState } from 'react';
import HomeBg from '../components/layout/HomeBg';
import HomeTitle from '../components/contents/HomeTitle';
import HomeEx from '../components/contents/HomeEx';

export default function Home() {
    const [language, setLanguage] = useState('Kor');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        console.log('Selected Language:', selectedLanguage);
    };

    return (
        <div>
            <HomeBg />
            {/* <HomeTitle language={language} onLanguageChange={handleLanguageChange} /> */}
            <HomeEx />
        </div>
    );
}
