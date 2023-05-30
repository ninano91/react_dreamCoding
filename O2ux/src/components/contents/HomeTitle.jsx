import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomeTitle({ language, onLanguageChange }) {
    const settings = {
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
    };

    const [currentLanguage, setCurrentLanguage] = useState(language);

    useEffect(() => {
        setCurrentLanguage(language);
    }, [language]);

    const handleLanguageChange = (selectedLanguage) => {
        setCurrentLanguage(selectedLanguage); // 언어 변경 시 상태 업데이트
        if (typeof onLanguageChange === 'function') {
            onLanguageChange(selectedLanguage);
        }
    };

    const getContent = () => {
        switch (currentLanguage) {
            case 'Eng':
                console.log('어느 언어일까:', currentLanguage);
                return (
                    <>
                        <span className="sup">유용하고 사용하기 쉽고 생산적인</span>
                        <strong className="tit">
                            커뮤니케이션과 연결을 통해 일관된 경험을 구현합니다 <br />
                        </strong>
                    </>
                );
            case 'Kor':
            default:
                console.log('어느 언어일까:', currentLanguage);
                return (
                    <>
                        <span className="sup">전략가, 디자이너 및 엔지니어</span>
                        <strong className="tit">
                            우리는 냉철함과 따뜻한 시선을 가진 <br />
                            '경험' 전문가입니다
                        </strong>
                    </>
                );
        }
    };

    return (
        <div className="main-slide-container">
            <Slider {...settings} className="text-slide">
                <div className="text-slide-item">{getContent()}</div>
            </Slider>
        </div>
    );
}
