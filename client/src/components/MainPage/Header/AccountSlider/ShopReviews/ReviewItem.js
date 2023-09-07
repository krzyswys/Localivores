import React,{useState} from "react";
import ReactStars from "react-rating-stars-component";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaStar,
  FaRegStar,
  FaRegCalendarAlt,
} from "react-icons/fa";
import styles from "./ReviewItem.module.css";
import { TimeAgo } from "../../../../../utility/time-ago";
import { getRatingLabel } from "../../../../../utility/rating";
import { hexToRgba } from "../../../../../utility/color-converter";
import ImageModal from "../../../../../UI/Modal/ImageModal/ImageModal";
const ReviewItem = ({ review }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { label, color } = getRatingLabel(review.rating);

  const rgbaColor = hexToRgba(color, 0.2); // 0.5 to poziom przezroczystości

  const handleImageClick = (index) => {
    console.log(index);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <li className={styles.reviewItem}>
      <div className={styles.reviewHeader}>
        <div className={styles.author}>
          <picture className={styles.picture}>
            <img
              src={review.profileImage}
              alt={review.author}
              className={styles.profileImage}
            />
          </picture>
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
        <span
          className={styles.labelRating}
          style={{
            color: color,
            border: `1px solid ${color}`,
            backgroundColor: `${rgbaColor}`,
          }}
        >
          {label}
        </span>
      </div>
      <p className={styles.content}>{review.content}</p>

      <div className={styles.reviewImages}>
        {review.reviewImages.map((image, index) => (
          <picture
            className={styles.reviewImageWrapper}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={review.author} />
          </picture>
        ))}
      </div>
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
      {isModalOpen && <ImageModal images={review.reviewImages} initialIndex={currentImageIndex} onClose={handleCloseModal} />}
    </li>
  );
};

export default ReviewItem;
