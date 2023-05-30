import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function HomeBg() {
    const [readyVideo, setReadyVideo] = useState(true);

    const readyVideoPlayer = () => {
        setReadyVideo(true);
    }; // useState로 확인후 강제실행 ->

    return (
        <div className="video-bg">
            <ReactPlayer
                url="/video/main.mp4"
                className="video-bg"
                width="auto"
                height="100vh"
                // min-height="100%"
                loop={true}
                muted={true} // 자동 재생 이슈
                playing={readyVideo} // useState //동영상이 준비되었을 때에만 재생
                onReady={readyVideoPlayer} // useState //동영상 재생 준비 완료 시 호출되는 콜백 함수
            />
        </div>
    );
}
