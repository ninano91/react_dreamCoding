// // 함수 앞에다 export default 를 선언해주는것이 정정했을 때 번거롭지 않다.
// export default function Profile() {
//     return <h1>엘리</h1>;
// }

// // rfc 단축어와, rfi 스니퍼 참고하고 확인하자!
// import React from 'react';

// export default function profile() {
//     return <div></div>;
// }

import React from 'react';
import Avartar from './Avartar';

export default function profile({ image, name, title, isNew }) {
    return (
        <div className="profile">
            <Avartar image={image} isNew={isNew} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}
