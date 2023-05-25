import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function HomeBg() {
    // const [readyVideo, setReadyVideo] = useState(true);

    // const readyVideoPlayer = () => {
    //     setReadyVideo(true);
    // }; // useState로 확인후 강제실행 -> 안됨

    const [isPlayerReady, setIsPlayerReady] = useState(false);

    useEffect(() => {
        setIsPlayerReady(true);
    }, []); // 컴포넌트가 처음 마운트될 때만 실행

    return (
        <div className="video-bg">
            <ReactPlayer
                url="/video/main.mp4"
                className="video-bg"
                width="100%"
                height="auto"
                loop={true}
                playing={isPlayerReady} // useEffect 동영상이 준비되었을 때에만 재생
                onReady={() => {}} //useEffect 비어있음

                // playing={isPlayerReady} // useState //동영상이 준비되었을 때에만 재생
                // onReady={handlePlayerReady} // useState //동영상 재생 준비 완료 시 호출되는 콜백 함수
            />
        </div>
    );
}
