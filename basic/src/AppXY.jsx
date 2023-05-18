import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    return (
        <div
            className="container"
            // e를 꼭 걸어줘야함,, 생략할 순 없을까.,..
            //event를 쓰기도 하지만, 온에 걸려있는 이벤트들은
            //명확하기 때문에 통상적으로 event 대신 e를 사용한다!
            onPointerMove={(e) => {
                // 마우스의 위치 값에 따라 따라가게 한다.
                // setPosition({ x: e.clientX, y: e.clientY });
                // y축 값을 고정적으로 하고, x값만 변경한다.
                setPosition((prev) => ({ x: e.clientX, y: prev.y }));
            }}
        >
            <div
                className="pointer"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            ></div>
        </div>
    );
}
