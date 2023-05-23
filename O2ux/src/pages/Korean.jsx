import React from 'react';
import AllCardList from './AllCardList';
import TitleWrap from '../components/layout/TitleWrap';
import PortfolioTab from '../components/tab/PortfolioTab';

export default function korean() {
    return (
        <div>
            <TitleWrap />
            <div className="list-area">
                <PortfolioTab />
                <AllCardList />
            </div>
        </div>
    );
}
