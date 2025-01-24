import React, { useState } from "react";
import styles from "./style.module.scss";
import { Icons } from "assets";
import classNames from "classnames";

type StarRatingProps = {
  initialRating: number;
  ratingDesc?: string;
  showRatingLabel?: boolean;
  hideSideLabels?: boolean;
  haveBigStars?: boolean;
};

const StarRating = ({
  initialRating,
  ratingDesc,
  haveBigStars,
  showRatingLabel = false,
  hideSideLabels,
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingClick = (newRating: number) => {
    setRating(newRating);
  };

  const validRating = Math.min(Math.max(rating, 0), 5);
  const fullStars = Math.floor(validRating);
  const emptyStars = Math.max(5 - fullStars, 0);

  const getRatingLabel = () => {
    switch (validRating) {
      case 1:
        return "Poor";
      case 2:
        return "Fair";
      case 3:
        return "Average";
      case 4:
        return "Good";
      case 5:
        return "Excellent";
      default:
        return "";
    }
  };

  // const StarIcon = haveBigStars ? Icons.StarFill2 : Icons.StarFill;
  // const StarIconEmpty = haveBigStars ? Icons.StarEmpty2 : Icons.StarEmpty;

  return (
    <div className={classNames(styles.starRating)}>
      {!hideSideLabels && (
        <span className={classNames(styles.ratingLabel, "mr-1.5")}>
          {ratingDesc}:
        </span>
      )}
      <div className={classNames(styles.stars, "flex items-center")}>
        <div className="flex items-center">
          {Array(fullStars)
            .fill(0)
            .map((_, index) => (
              <div key={`full-${index}`} className="relative">
                {/* <StarIcon
                  className={classNames(styles.starIcon, {
                    [styles.big]: haveBigStars,
                  })}
                  onClick={() => handleRatingClick(index + 1)}
                /> */}
                {showRatingLabel && rating === index + 1 && (
                  <span
                    className={classNames(
                      styles.ratingLabelBelowStar,
                      "absolute inset-x-auto mt-1.5"
                    )}
                  >
                    {getRatingLabel()}
                  </span>
                )}
              </div>
            ))}

          {Array(emptyStars)
            .fill(0)
            .map((_, index) => (
              <div key={`empty-${index}`} className="relative">
                {/* <StarIconEmpty
                  className={classNames(styles.emptyIcon, {
                    [styles.big]: haveBigStars,
                  })}
                  onClick={() => handleRatingClick(fullStars + index + 1)}
                /> */}
                {showRatingLabel && rating === fullStars + index + 1 && (
                  <span
                    className={classNames(
                      styles.ratingLabelBelowStar,
                      "absolute inset-x-auto mt-1.5"
                    )}
                  >
                    {getRatingLabel()}
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
      {!hideSideLabels && (
        <span className={styles.ratingLabel}>{validRating}/5</span>
      )}
    </div>
  );
};

export default StarRating;
