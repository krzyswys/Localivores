// NewReview.js
import React, { useState } from "react";
import AutoExpandTextArea from "../../../../../UI/TextArea/AutoExpandTextArea"; // Ensure the path is correct
import styles from "./NewReview.module.css"; // Ensure the path is correct
const NewReview = (props) => {
  const [review, setReview] = useState({
    author: "",
    date: "",
    content: "",
    rating: 0,
    thumbsUp: 0,
    thumbsDown: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(review);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        placeholder="Author"
        value={review.author}
        className={styles.author}
        onChange={(e) =>
          setReview((prev) => ({ ...prev, author: e.target.value }))
        }
      />
      <AutoExpandTextArea
        placeholder="Content"
        value={review.content}
        className={styles.textarea}
        onChange={(e) =>
          setReview((prev) => ({ ...prev, content: e.target.value }))
        }
      />
      
      <button className={styles.button} type="button">
        Add Review
      </button>
    </form>
  );
};

export default NewReview;
