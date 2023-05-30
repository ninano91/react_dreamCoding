import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { langState } from "../utils/atom";

export default function Navbar() {
    const [lang, setLang] = useRecoilState(langState);
    const [activeButton, setActiveButton] = useState("Kor");

    const langChange = (selectedLang) => {
        if (selectedLang !== activeButton) {
            setLang((prevLang) => (prevLang === "한국어" ? "English" : "한국어"));
            setActiveButton(selectedLang);
        }
    };

    return (
        <nav>
            <div className="left">
                <Link to="../Home" className="main-logo"></Link>
            </div>
            <div className="right">
                <button onClick={() => langChange("Kor")} disabled={activeButton === "Kor"}>
                    Kor
                </button>
                <button onClick={() => langChange("Eng")} disabled={activeButton === "Eng"}>
                    Eng
                </button>
            </div>
        </nav>
    );
}
