import React, { useState } from "react";
import ModalPortal from "../ModalPortal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleContainerClick = (event) => {
    // Prevent clicks inside the modal content from closing the modal
    event.stopPropagation();
  };

  return (
    <ModalPortal>
      <div className={styles.modalContainer} onClick={onClose}>
        <div
          style={{ display: "flex", alignItems: "center", zIndex: "101" }}
          onClick={handleContainerClick}
        >
          <button onClick={goPrev} className={styles.navigationButton}>
            &lt;
          </button>
          <img
            src={images[currentIndex]}
            alt="Review"
            className={styles.mainImage}
          />
          <button onClick={goNext} className={styles.navigationButton}>
            &gt;
          </button>
        </div>

        <div className={styles.thumbnailContainer} onClick={handleContainerClick}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`${styles.thumbnail} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </ModalPortal>
  );
};

export default ImageModal;
