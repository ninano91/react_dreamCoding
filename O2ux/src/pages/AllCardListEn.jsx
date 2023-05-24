import React, { useEffect, useState } from 'react';
import PortFolioCard from '../components/list/PortFolioCard';
import PortfolioTab from '../components/tab/PortfolioTab';
import cardList from '../components/list/CardListObject';

export default function AllCardListEn() {
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

    return (
        <>
            <PortfolioTab onSltTab={filterCardsByTab} />
            <ul className="portfolio-card-list">
                {filterCard.map((cardList) => (
                    <PortFolioCard
                        key={cardList.id}
                        id={cardList.id}
                        image={cardList.image}
                        title={cardList.titleEn}
                        year={cardList.year}
                        category={cardList.category}
                    />
                ))}
            </ul>
        </>
    );
}
