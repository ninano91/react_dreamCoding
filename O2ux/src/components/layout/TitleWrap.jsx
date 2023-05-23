import React from 'react';
import RequestBtn from '../button/RequestBtn';

export default function TitleWrap() {
    return (
        <div className="title-pack">
            <span className="sub-txt">Portfolio</span>
            <h2 className="tit-txt">프로젝트</h2>
            <RequestBtn />
        </div>
    );
}
