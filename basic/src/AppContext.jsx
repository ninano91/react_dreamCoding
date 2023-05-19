import React from 'react';

export default function AppContext() {
    return (
        <>
            <h2></h2>
            <div>
                모든 컴포넌트 들이 필요하다면 어플리케이션 전반적으로 필요한
                경우 Context API를 사용할 수 있다.
            </div>
            <p>언어</p>
            <p>테마(다크모드)</p>
            <p>로그인</p>

            <h2>
                상태가 변경되는 것 이기때문에 리렌더링이 되어야한다. 빈번히
                업데이트 되는 상태는 contextAPI 사용X 대신! [Umbrella]를
                사용해야 한다!
            </h2>
        </>
    );
}
