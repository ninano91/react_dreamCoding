import React, { useState } from 'react';
import HomeExChild from './HomeExChild';

export default function HomeEx() {
    const [chicken, setChicken] = useState('치킨');

    const clickEvent = () => {
        setChicken('삼겹살?');
    };

    return (
        <div className="ex-box">
            <button className="exBtn" onClick={clickEvent}>
                버튼
            </button>
            {chicken}
            <HomeExChild chicken={chicken} />
        </div>
    );
}
