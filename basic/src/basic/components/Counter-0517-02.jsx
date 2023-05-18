import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <p className="number">
                {count}
                <span className="total">/{total}</span>
            </p>
            <button
                className="button"
                onClick={() => {
                    setCount((prev) => prev + 1);
                    onClick();
                }}
            >
                Add +
            </button>
        </div>
    );
}

//내부적으로 볼 수 있는 상태값은 useState를 사용!
// 네트워크를 사용해야 하거나, 무거운 데이터를 가져와야 할 때에는 useEffect를 사용하여야한다
//컴포넌트가 처음 그려질 때 많이 사용한다.
