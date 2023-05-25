import React from 'react';
import { useEffect } from 'react';
import './NavButton.css';
import GnbWrap from './../layout/GnbWrap';

// 컴포넌트 내부에 함수를 불러서 실행할 경우,
// 함수가 btn-menu 버튼의 click 이벤트에 대해 매번 등록되기 때문에
// 이는 Navbar 컴포넌트가 렌더링될 때마다 rotateBtn 함수가 새로 생성되고
// 새로운 함수가 onClick 핸들러로 등록됨.
// 해결하기 위해서는 rotateBtn 함수를 Navbar 컴포넌트 외부로 이동시키고,
// 함수를 한 번만 생성하도록 수정

const rotateBtn = function () {
    let scrollTop, saveTop;
    const btnMenu = document.querySelector('.btn-menu');
    const gnbWrap = document.querySelector('.gnb-wrap');
    const body = document.querySelector('body');
    const mainSlide = document.querySelector('.main-slide-container');

    btnMenu.addEventListener('click', function () {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!this.classList.contains('close')) {
            saveTop = scrollTop;
            this.classList.add('close');
            gnbWrap.classList.add('on');
            mainSlide.classList.add('hide');
            body.classList.add('scrolltop');
            window.scrollTo(0, scrollTop);
        } else {
            this.classList.remove('close');
            gnbWrap.classList.remove('on');
            mainSlide.classList.remove('hide');
            body.classList.remove('scrolltop');
            window.scrollTo(0, saveTop);
        }
        return;
    });
};
export default function NavButton() {
    useEffect(() => {
        rotateBtn(); // rotateBtn 함수를 한 번만 호출
    }, []);

    return (
        <div className="gnb-btn-wrap">
            <button className="btn-menu">
                <span>Menu</span>
            </button>
            <GnbWrap />
        </div>
    );
}
