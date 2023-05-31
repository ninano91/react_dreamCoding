import React from 'react';
import RequestBtn from '../button/RequestBtn';
import { useRecoilState } from 'recoil';
import { langState } from '../../utils/atom';

export default function TitleWrap() {
    const [lang, setLang] = useRecoilState(langState);

    return (
        <div className="title-pack">
            <span className="sub-txt">Portfolio</span>
            <h2 className="txt-txt">
                {lang === '한국어' ? (
                    <h2 className="tit-txt">프로젝트</h2>
                ) : (
                    <h2 className="tit-txt">Projects & Cases</h2>
                )}
            </h2>
            <RequestBtn />
        </div>
    );
}
