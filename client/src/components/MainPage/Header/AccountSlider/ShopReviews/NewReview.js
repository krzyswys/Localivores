// NewReview.js
import React, { useState, useRef } from "react";
import ReactStars from "react-rating-stars-component";
import AutoExpandTextArea from "../../../../../UI/TextArea/AutoExpandTextArea"; // Ensure the path is correct
import styles from "./NewReview.module.css"; // Ensure the path is correct
import ImageUpload from "../../../../../UI/ImageUpload/ImageUpload"; // Ensure the path is correct
const NewReview = (props) => {
  const [review, setReview] = useState({
    author: "",
    date: "",
    content: "",
    rating: 0,
    thumbsUp: 0,
    thumbsDown: 0,
    reviewImages: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(review);
  };
  const handleImagesAdded = (files) => {
    const updatedImages = [...review.reviewImages, ...files];
    setReview((prev) => ({ ...prev, reviewImages: updatedImages }));
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Submit Your Review</h2>
      {/* <div className={styles.images}>
        <p className={styles.p}>Add images</p>
        <input type="file" multiple />
       </div> */}
       <ImageUpload onImagesAdded={handleImagesAdded} />
      <div className={styles.rating}>
        <p className={styles.p}>Rate</p>
        <ReactStars
          count={5}
          size={32}
          value={review.rating ? review.rating : 0}
          edit={true}
          isHalf={true}
          activeColor="#ffd700"
         
        />
        </div>
      <AutoExpandTextArea
        placeholder="Content"
        value={review.content}
        className={styles.textarea}
        onChange={(e) =>
          setReview((prev) => ({ ...prev, content: e.target.value }))
        }
      />
       
      
      <button className={styles.button} type="button">
        Submit Review
      </button>
    </form>
  );
};

export default NewReview;
