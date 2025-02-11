"use client";

import { useRef, useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { MdPause, MdPlayArrow, MdVolumeOff, MdVolumeUp } from "react-icons/md";

interface BannerVideoProps {
  videoSrc?: string;
  thumbnailSrc?: string;
  alt?: string;
  isHaveAudioControl?: boolean;
}

const BannerVideo = ({
  videoSrc,
  thumbnailSrc,
  alt,
  isHaveAudioControl,
}: BannerVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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

      {isHaveAudioControl && (
        <span className="absolute lg:top-16 top-12 left-2 flex items-center gap-1.5">
          <button
            className="bg-black bg-opacity-50 p-2 rounded-full w-10 h-10"
            onClick={toggleMute}
            // className={styles.muteButton}
          >
            {isMuted ? <MdVolumeOff size={24} /> : <MdVolumeUp size={24} />}
          </button>

          <span className={classNames(styles.playButtonWrapper, "z-50")}>
            <button
              className={
                // styles.playButton,
                "cursor-pointer bg-black bg-opacity-50 p-2 rounded-full w-10 h-10 flex items-center justify-center"
              }
              onClick={handlePlayPause}
            >
              {/* <div className={styles.playIcon}> */}
              {isPlaying ? (
                <MdPause size={32} color="#fff" />
              ) : (
                <MdPlayArrow size={32} color="#fff" />
              )}
              {/* </div> */}
            </button>
          </span>
        </span>
      )}
    </div>
  );
};

export default BannerVideo;
