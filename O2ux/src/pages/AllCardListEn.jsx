import React from 'react';
import PortFolioCard from '../components/list/PortFolioCard';

export default function AllCardListEn() {
    const cardList = [
        {
            id: 1,
            image: '/card/img_Portfolio_woori.png',
            year: '2022',
            title: '우리은행 금융소비자 통합 관리 시스템 UX 구축',
            titleEn: 'Woori Bank Financial Consumer Integrated management System',
            category: ['UX DESIGN', 'CONSULTING', 'WEB'],
        },
        {
            id: 2,
            image: '/card/img_Portfolio_sk.png',
            year: '2022',
            title: 'SK증권 마이데이터 서비스 UX 컨설팅',
            titleEn: 'SK Securities MyData Service UX Consulting',
            category: ['CONSULTING'],
        },
        {
            id: 3,
            image: '/card/img_Portfolio_kblife.png',
            year: '2022',
            title: 'KB Life one 보험코어 시스템 UX 컨설팅',
            titleEn: 'KB Life one System UI/UX Consulting',
            category: ['CONSULTING'],
        },
        {
            id: 4,
            image: '/card/img_Portfolio_semo.png',
            year: '2021',
            title: '세모장부 Mobile Application 컨설팅',
            titleEn: 'Semojangbu Mobile Application Consulting',
            category: ['UX DESIGN', 'CONSULTING'],
        },
        {
            id: 5,
            image: '/card/img_Portfolio_shinhan.png',
            year: '2021',
            title: '신한은행 금융소비자 플랫폼 UI/UX 구축',
            titleEn: 'Shinhan Financial Consumer Protection Platform UI/UX Design',
            category: ['UX DESIGN', 'CONSULTING'],
        },
        {
            id: 6,
            image: '/card/img_Portfolio_koreabk.png',
            title: '한국은행 경제통계 ECOS System UI/UX 재구축',
            titleEn: 'BOK Economic Statistics System UI/UX Design',
            year: '2021',
            category: ['UX DESIGN', 'MOBILE', 'WEB'],
        },
        {
            id: 7,
            image: '/card/img_Portfolio_kbcapital.png',
            year: '2021',
            title: 'KB캐피탈 재고금융시스템 구축',
            titleEn: 'KB Capital Inventory Finance System UI/UX Design',
            category: ['UX DESIGN', 'MOBILE', 'WEB'],
        },
        {
            id: 8,
            image: '/card/img_Portfolio_inable.png',
            year: '2021',
            title: '인에이블 차트 구축',
            titleEn: 'Enable Chart UI/UX Design',
            category: ['UX DESIGN', 'CONCEPT', 'MOBILE', 'WEB'],
        },
        {
            id: 9,
            image: '/card/img_Portfolio_accha.png',
            year: '2021',
            title: '아차 유비벨록스 마이데이터 금융 서비스 UX 컨설팅',
            titleEn: 'Acha Mydata Service UX Consulting',
            category: ['UX DESIGN', 'CONCEPT', 'MOBILE', 'CONSULTING'],
        },
        {
            id: 10,
            image: '/card/img_Portfolio_nhbank.png',
            year: '2021',
            title: 'NH농협은행 스마트 뱅킹 UX 컨설팅',
            titleEn: 'NH Smart Banking UX Consulting',
            category: ['UX DESIGN', 'CONSULTING'],
        },
    ];

    return (
        <ul className="portfolio-card-list">
            {cardList.map((cardList) => (
                <PortFolioCard
                    id={cardList.id}
                    image={cardList.image}
                    title={cardList.titleEn}
                    year={cardList.year}
                    category={cardList.category}
                />
            ))}
        </ul>
    );
}
