"use client";

import React, { useRef, useState } from "react";

interface CustomVideoPlayerProps {
  videoSrc?: string;
  thumbnailSrc?: string | any;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  videoSrc,
  thumbnailSrc,
  alt = "Video Thumbnail",
  width = "100%",
  height = "auto",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        cursor: isPlaying ? "default" : "pointer",
      }}
      onClick={!isPlaying ? handlePlay : undefined}
    >
      {!isPlaying && (
        <img
          src={thumbnailSrc}
          alt={alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      <video
        ref={videoRef}
        src={videoSrc}
        style={{
          width: "100%",
          height: "100%",
          display: isPlaying ? "block" : "none",
          objectFit: "cover",
        }}
        autoPlay
        controls={isPlaying} // Show controls only when playing
        onPause={handlePause}
      />
    </div>
  );
};

export default CustomVideoPlayer;
