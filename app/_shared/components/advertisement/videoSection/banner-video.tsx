"use client";

import { useRef } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

interface BannerVideoProps {
  videoSrc?: string;
  thumbnailSrc: string;
  alt: string;
}

const BannerVideo = ({ videoSrc, thumbnailSrc, alt }: BannerVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      className={classNames(
        styles.videoContainer,
        "flex items-center justify-center"
      )}
    >
      <video
        ref={videoRef}
        className="max-h-full overflow-y-hidden object-contain"
        // poster={thumbnailSrc}
        preload="auto"
        muted
        loop
        autoPlay
      >
        <source src={videoSrc} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BannerVideo;
