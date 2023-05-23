import React from 'react';
import AllCardListEn from './AllCardListEn';
import TitleEnWrap from '../components/layout/TitleEnWrap';

export default function english() {
    return (
        <div>
            <TitleEnWrap />
            <div className="list-area">
                <AllCardListEn />
            </div>
        </div>
    );
}
