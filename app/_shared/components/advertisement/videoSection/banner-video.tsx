"use client";

import { useRef, useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { LuCirclePause, LuCirclePlay } from "react-icons/lu";

interface BannerVideoProps {
  videoSrc?: string;
  thumbnailSrc: string;
  alt: string;
}

const BannerVideo = ({ videoSrc, thumbnailSrc, alt }: BannerVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={classNames(
        styles.videoContainer,
        "flex items-center justify-center"
      )}
    >
      <video
        ref={videoRef}
        className="lg:h-auto h-full max-h-full overflow-y-hidden object-contain"
        // poster={thumbnailSrc}
        preload="auto"
        muted
        loop
        autoPlay
      >
        <source src={videoSrc} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      <span
        className={classNames(
          styles.playButtonWrapper,
          "absolute hidden sm:top-4 xs:top-0 -top-2 sm:-right-2 -right-4 z-50"
        )}
      >
        <div
          className={(styles.playButton, "cursor-pointer")}
          onClick={handlePlayPause}
        >
          <div className={styles.playIcon}>
            {isPlaying ? (
              <LuCirclePause fontSize={40} color="#EC1E24" />
            ) : (
              <LuCirclePlay fontSize={40} color="#EC1E24" />
            )}
          </div>
        </div>
      </span>
    </div>
  );
};

export default BannerVideo;
