import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

export default function HomeScrollpage() {
    const handleWheel = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    return (
        <div className="scroll-full-page on">
            <div className="scroll-slide-container" onWheel={handleWheel}>
                <HorizontalScroll>
                    <div className="scroll-slide-item">ddd</div>
                    <div className="scroll-slide-item">dddd</div>
                    <div className="scroll-slide-item">didi</div>
                    <div className="scroll-slide-item">dddd</div>
                    <div className="scroll-slide-item">dddd</div>
                </HorizontalScroll>
            </div>
        </div>
    );
}
