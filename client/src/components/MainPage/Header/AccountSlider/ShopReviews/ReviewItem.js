import React from "react";
import ReactStars from "react-rating-stars-component";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaStar,
  FaRegStar,
  FaRegCalendarAlt,
  FaUser,
} from "react-icons/fa";
import styles from "./ReviewItem.module.css";
import { TimeAgo } from "../../../../../utility/time-ago";
import {getRatingLabel} from "../../../../../utility/rating";
import {hexToRgba} from "../../../../../utility/color-converter";
const ReviewItem = ({ review }) => {
  
    const { label, color } = getRatingLabel(review.rating);
   
    const rgbaColor = hexToRgba(color, 0.2);  // 0.5 to poziom przezroczystości
   
    return (
    <li className={styles.reviewItem}>
      <div className={styles.reviewHeader}>
        <div className={styles.author}>
          <FaUser className={styles.icon} />
          <h3>{review.author}</h3>
        </div>
        <div className={styles.calendar}>
          <FaRegCalendarAlt className={styles.icon} />
          <TimeAgo date={review.date} />
        </div>
      </div>
      <div className={styles.rating}>
        <ReactStars
          count={5}
          size={24}
          value={review.rating ? review.rating : 0}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
        />
        <span className={styles.labelRating} style={{ color: color, "border":`1px solid ${color}`, backgroundColor: `${rgbaColor}` }}>{label}</span>
      </div>
      <p className={styles.content}>{review.content}</p>

      <div className={styles.thumbs}>
        <div className={styles.thumbsUp}>
          <FaThumbsUp className={styles.icon} />
          <p>{review.thumbsUp}</p>
        </div>
        <div className={styles.thumbsDown}>
          <FaThumbsDown className={styles.icon} />
          <p>{review.thumbsDown}</p>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
