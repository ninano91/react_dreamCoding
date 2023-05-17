import { Fragment, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function AppCounter() {
    const [totalCount, settotalCount] = useState(0);
    const handleClick = () => {};
    return (
        <div>
            <div className="total-box">
                Total Count : {totalCount} {totalCount < 10 ? '🤢' : '🤑'}
            </div>
            <Counter total={count} onClick={handleClick} />
            <Counter total={count} onClick={handleClick} />
        </div>
    );
}
export default AppCounter;
