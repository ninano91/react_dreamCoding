import './App.css';
import { Fragment } from 'react';

function AppJSX() {
    const name = '엘리';
    const list = ['우유', '딸기', '바나나'];
    return (
        <Fragment>
            <h1 className="orange">{`hello! ${name}`}</h1>
            <h2>hello1223</h2>
            <p>{name}</p>
            <ul>
                {/* 화살표 함수 */}
                {list.map((item) => (
                    <li>{item}</li>
                ))}

                {list.map((item) => {
                    return <li>{item}</li>;
                })}

                {list.map(function (item) {
                    return <li>{item}</li>;
                })}
            </ul>
        </Fragment>
    );
}
// 컴포넌트는 하나의 태그를 반환해야 한다.
// 함수의 이름은 대문자로 시작해야 한다.
export default AppJSX;
