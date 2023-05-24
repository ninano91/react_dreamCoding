import React from 'react';
import AllCardList from './AllCardList';
import TitleWrap from '../components/layout/TitleWrap';

export default function korean() {
    return (
        <div>
            <TitleWrap />
            <div className="list-area">
                <AllCardList />
            </div>
        </div>
    );
}
