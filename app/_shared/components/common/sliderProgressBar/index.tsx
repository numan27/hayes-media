import { Icons } from "assets";
import classNames from "classnames";
import React from "react";
import styles from "./style.module.scss";

interface ProgressBarProps {
  // progress: number;
  onSlidePrev: () => void;
  onSlideNext: () => void;
}

const ProgressBar = ({
  // progress,
  onSlidePrev,
  onSlideNext,
}: ProgressBarProps) => (
  <div className="flex items-center gap-4 justify-center">
    <button onClick={onSlidePrev}>
      <Icons.ChevLeft />
    </button>
    {/* <div
      className={classNames(
        "rounded overflow-hidden relative w-full",
        styles.progressBarContainer
      )}
    >
      <div
        className={classNames(
          "h-full transition-all ease-in-out duration-300",
          styles.progressBar
        )}
        style={{ width: `${progress}%` }}
      ></div>
    </div> */}
    <button onClick={onSlideNext}>
      <Icons.ChevRight />
    </button>
  </div>
);

export default ProgressBar;
