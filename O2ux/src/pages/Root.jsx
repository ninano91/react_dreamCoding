import React, { useState } from "react";

import "../style/css/css/reset.css";
import "../style/css/css/common.css";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { RecoilRoot } from "recoil";

export default function Root() {
    const [language, setLanguage] = useState("Kor"); // 선택된 언어 상태를 관리하기 위한 useState 훅 추가

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        console.log("Selected Language:", language);
    };

    return (
        <RecoilRoot>
            <div className="body-bg">
                <div className="content-wrap">
                    <Navbar onLanguageChange={handleLanguageChange} />
                    <Outlet />
                </div>
                <span>Root</span>
            </div>
        </RecoilRoot>
    );
}

// import React, { useState } from 'react';
// import '../style/css/css/reset.css';
// import '../style/css/css/common.css';

// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Home from '../pages/Home';

// export default function Root() {
//     const [language, setLanguage] = useState('Kor'); // 선택된 언어 상태를 관리하기 위한 useState 훅 추가

//     const handleLanguageChange = (selectedLanguage) => {
//         setLanguage(selectedLanguage);
//     };

//     return (
//         <div className="body-bg">
//             <div className="content-wrap">
//                 <Navbar onLanguageChange={handleLanguageChange} />
//                 <Outlet />
//             </div>
//             <span>Root</span>
//             <Home language={language} /> {/* language prop을 전달 */}
//         </div>
//     );
// }
