import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRecoilState } from 'recoil';
import { langState } from '../../utils/atom';

export default function HomeTitle() {
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

    const [lang, setLang] = useRecoilState(langState);

    // const langChange = () => {
    //     setLang((prevLang) => (prevLang === "한국어" ? "English" : "한국어"));
    // };

    return (
        <div className="main-slide-container">
            {lang === '한국어' ? (
                <Slider {...settings} className="text-slide">
                    <div className="text-slide-item">
                        <span className="sup">Strategists, Designers & Engineers</span>
                        <strong className="tit">
                            우리는 냉철함과 따뜻한 시선을 가진 <br />
                            ‘경험’ 전문가입니다
                        </strong>
                    </div>
                    <div className="text-slide-item">
                        <span className="sup">
                            Usefumain-slide-l, Usable & Empowering
                        </span>
                        <strong className="tit">
                            사람의 커뮤니케이션과 <br />
                            가까운 방식으로 일관된 <br />
                            경험을 구현합니다
                        </strong>
                    </div>
                    <div className="text-slide-item">
                        <span className="sup">Strategize, Visualize & Systematize</span>
                        <strong className="tit">
                            공기처럼 느껴지지 않지만 <br />
                            모든 분야에서 필요한 UX의 가치를 실현합니다
                        </strong>
                    </div>
                </Slider>
            ) : (
                <Slider {...settings} className="text-slide">
                    <div className="text-slide-item">
                        <span className="sup">Strategists, Designers & Engineers</span>
                        <strong className="tit">
                            We strive to create digital experience <br />
                            in the way people communicate
                        </strong>
                    </div>
                    <div className="text-slide-item">
                        <span className="sup">
                            Usefumain-slide-l, Usable & Empowering
                        </span>
                        <strong className="tit">
                            We are ‘experience’ specialists with <br />
                            cool-headed intuition and <br />
                            warm-hearted reasoning
                        </strong>
                    </div>
                    <div className="text-slide-item">
                        <span className="sup">Strategize, Visualize & Systematize</span>
                        <strong className="tit">
                            We deliver strong and impactful value <br />
                            of UX like Oxygen in the air
                        </strong>
                    </div>
                </Slider>
            )}
        </div>
    );
}
