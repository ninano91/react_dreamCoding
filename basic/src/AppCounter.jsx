import { Fragment, useState } from 'react';
import './App.css';
import Counter from './components/Counter-0517-02';

function AppCounter() {
    const [count, setCount] = useState(0);
    // const handleClick = () => setCount(count+1);
    // count++ 이전 상태값을 근거해야하기때문에 아래와 같이 정정!
    const handleClick = () => setCount((prev) => prev + 1);
    return (
        <div className="container">
            <div className="total-box">
                Total Count : {count} {count < 10 ? '🤢' : '🤑'}
            </div>
            <div className="counter-wrap">
                <Counter total={count} onClick={handleClick} />
                <Counter total={count} onClick={handleClick} />
            </div>
        </div>
    );
}
export default AppCounter;
