import React, { useRef } from 'react';
import HomeBg from '../components/layout/HomeBg';
import HomeTitle from '../components/contents/HomeTitle';
import HomeScrollpage from './HomeScrollpage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
    const sliderRef = useRef(null);

    const handleWheel = (e) => {
        e.preventDefault();
        const slider = sliderRef.current;
        const deltaY = e.deltaY;
        console.log(e.deltaY);
        if (deltaY > 150) {
            slider.slickPrev();
        } else {
            slider.slickNext();
        }
    };
    const settings = {
        fade: true,
        infinite: false,
        autoplay: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: true,
    };

    return (
        <div onWheel={handleWheel}>
            <HomeBg />
            <Slider {...settings} ref={sliderRef} className="home-slide">
                <HomeTitle />
                <HomeScrollpage />
            </Slider>
            <div class="ico_scroll">
                <span></span>
            </div>
            <div class="bot_info">
                <p class="copyright">2020 ⓒO2UX All Rights Reserved</p>
                <a
                    href="../../content/pdf/O2UX_Company_Profile_2022.pdf"
                    target="_blank"
                    class="company"
                    download=""
                >
                    {/* <i class="far fa-file-pdf"></i>COMPANY PROFILE */}
                </a>
            </div>
        </div>
    );
}
