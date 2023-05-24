import React from 'react';
import GnbFooterItem from './GnbFooterItem';

export default function GnbFooterlist() {
    const footerList = [
        {
            dt: 'Mail',
            dd: 'ahnleesa@o2ux.com',
        },
        {
            dt: 'Tel',
            dd: '02.529.8665',
            dd2: '02.529.8666 (FAX)',
        },
        {
            dt: 'Address',
            dd: '서울특별시 강남구 도산대로 26길 36 동인빌딩 2층 오투유엑스, 06041 ',
            dd2: '2F O2UX, 36, Dosan-daero 26-gil,  Gangnam-gu, Seoul, Republic of Korea, 06041',
        },
    ];

    return (
        <div className="footer-list">
            {footerList.map((footerList) => (
                <GnbFooterItem
                    key={footerList.dt}
                    dt={footerList.dt}
                    dd={footerList.dd}
                    dd2={footerList.dd2}
                />
            ))}
        </div>
    );
}
