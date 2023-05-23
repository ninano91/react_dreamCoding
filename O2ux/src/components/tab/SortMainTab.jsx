import React, { useState } from 'react';

export default function SortMainTab() {
    const [category, setCategory] = useState('ALL');
    const sortTabClick = (category) => {
        setCategory(category);
    };
    // const filterCardList = setCategory ==='ALL' ?
    return (
        <div>
            <span>dd</span>
        </div>
    );
}
