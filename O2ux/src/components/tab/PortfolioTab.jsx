import React, { useState } from 'react';

export default function PortfolioTab({ onSltTab }) {
    // 탭 초기 값 세팅
    const [sltTab, setSltTab] = useState('ALL');

    // 탭을 클릭했을 때 이벤트
    const handleTabClick = (tab) => {
        setSltTab(tab);
        onSltTab(tab);
    };

    return (
        <div className="tab-list-wrap">
            <ul className="tab-list">
                <li>
                    <div
                        className={`tab-item ${sltTab === 'ALL' ? 'active' : ''}`}
                        onClick={() => handleTabClick('ALL')}
                    >
                        ALL
                    </div>
                </li>
                <li>
                    <div
                        className={`tab-item ${sltTab === 'UX DESIGN' ? 'active' : ''}`}
                        onClick={() => handleTabClick('UX DESIGN')}
                    >
                        UX DESIGN
                    </div>
                </li>
                <li>
                    <div
                        className={`tab-item ${sltTab === 'CONSULTING' ? 'active' : ''}`}
                        onClick={() => handleTabClick('CONSULTING')}
                    >
                        CONSULTING
                    </div>
                </li>
                <li>
                    <div
                        className={`tab-item ${sltTab === 'CONCEPT' ? 'active' : ''}`}
                        onClick={() => handleTabClick('CONCEPT')}
                    >
                        CONCEPT
                    </div>
                </li>
                <li>
                    <div
                        className={`tab-item ${sltTab === 'MOBILE' ? 'active' : ''}`}
                        onClick={() => handleTabClick('MOBILE')}
                    >
                        MOBILE
                    </div>
                </li>
                <li>
                    <div
                        className={`tab-item ${sltTab === 'WEB' ? 'active' : ''}`}
                        onClick={() => handleTabClick('WEB')}
                    >
                        WEB
                    </div>
                </li>
                <li>
                    <div
                        className={`tab-item ${sltTab === 'MOTION' ? 'active' : ''}`}
                        onClick={() => handleTabClick('MOTION')}
                    >
                        MOTION
                    </div>
                </li>
            </ul>
        </div>
    );
}
