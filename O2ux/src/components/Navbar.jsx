import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import NavButton from './button/NavButton';
// import Home from '../pages/Home';

// 컴포넌트 내부에 함수를 불러서 실행할 경우,
// 함수가 btn-menu 버튼의 click 이벤트에 대해 매번 등록되기 때문에
// 이는 Navbar 컴포넌트가 렌더링될 때마다 rotateBtn 함수가 새로 생성되고
// 새로운 함수가 onClick 핸들러로 등록됨.
// 해결하기 위해서는 rotateBtn 함수를 Navbar 컴포넌트 외부로 이동시키고,
// 함수를 한 번만 생성하도록 수정

export default function Navbar() {
    // useEffect(() => {
    //     rotateBtn(); // rotateBtn 함수를 한 번만 호출
    // }, []);
    const location = useLocation();

    return (
        <nav>
            <div className="left">
                {/* <h2 className="main-logo">
                    <span></span>
                </h2> */}
                <Link to="../Home" className="main-logo"></Link>
            </div>
            <div className="right">
                <Link
                    to="/Korean"
                    className={classNames(location.pathname === '/Korean' && 'active')}
                >
                    Kor
                </Link>
                <Link
                    to="/English"
                    className={classNames(location.pathname === '/English' && 'active')}
                >
                    Eng
                </Link>
                <NavButton />
            </div>
        </nav>
    );
}
