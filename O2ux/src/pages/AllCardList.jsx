import React, { useEffect, useState } from 'react';
import PortFolioCard from '../components/list/PortFolioCard';
import PortfolioTab from '../components/tab/PortfolioTab';
import cardList from '../components/list/CardListObject';
import { useRecoilState } from 'recoil';
import { langState } from '../utils/atom';

export default function AllCardList() {
    const [filterCard, setFilterCard] = useState([]);

    useEffect(() => {
        setFilterCard(cardList);
    }, []);

    const filterCardsByTab = (tab) => {
        if (tab === 'ALL') {
            setFilterCard(cardList);
        } else {
            const filtered = cardList.filter((card) => card.category.includes(tab));
            setFilterCard(filtered);
        }
    };

    //언어 설정
    const [lang, setLang] = useRecoilState(langState);

    return (
        <>
            <PortfolioTab onSltTab={filterCardsByTab} />
            <ul className="portfolio-card-list">
                {filterCard.map((cardList) => (
                    <PortFolioCard
                        key={cardList.id}
                        id={cardList.id}
                        image={cardList.image}
                        title={lang === '한국어' ? cardList.title : cardList.titleEn}
                        year={cardList.year}
                        category={cardList.category}
                    />
                ))}
            </ul>
        </>
    );
}
