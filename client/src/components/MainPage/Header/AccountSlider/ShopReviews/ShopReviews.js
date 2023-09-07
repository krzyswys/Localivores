import React, { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ReviewItem from "./ReviewItem";
import NewReview from "./NewReview";
import SortOptions from "../../../../../UI/SortOptions/SortOptions";
import convertDate from "../../../../../utility/date-conventer";
import classes from "../AccountOrderHistory/AccountOrderHistory.module.css";

import styles from "./ShopReviews.module.css";
const ShopReviews = (props) => {
  const { reviews } = props.shop;
  console.log(reviews);
  const [sortedReviews, setSortedReviews] = React.useState(reviews);
  // Add a function to handle new review submissions
  const handleReviewSubmit = (newReview) => {
    // For now, just logging the new review. In a real application, you'd likely make an API call or update state.
    console.log("New Review:", newReview);
  };

  if (!reviews) return null;

  const handleSort = (criteria, order) => {
    let sorted = [...sortedReviews];
    console.log(criteria, order);
    switch (criteria) {
      case "date":
        sorted.sort((a, b) => {
          const dateA = convertDate(a.date);
          const dateB = convertDate(b.date);
          return order === "asc"
            ? new Date(dateA) - new Date(dateB)
            : new Date(dateB) - new Date(dateA);
        });

        break;
      case "rating":
        sorted.sort((a, b) =>
          order === "asc" ? a.rating - b.rating : b.rating - a.rating
        );
        break;
      case "thumbsUp":
        sorted.sort((a, b) =>
          order === "asc" ? a.thumbsUp - b.thumbsUp : b.thumbsUp - a.thumbsUp
        );
        break;
      default:
        break;
    }
    console.log(sorted);
    setSortedReviews(prevReviews => {
      return [...sorted];
  });
  
  };
  

  return (
    <div
      className={`${classes.account_settings_menu_container} ${styles.container}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={classes.go_back_icon}
        onClick={() => props.handleMenuClick("history-details")}
      >
        <AiOutlineArrowLeft />
      </div>
      <h1>Shop reviews</h1>

      <NewReview onSubmit={handleReviewSubmit} />
      <ul className={styles.reviewList}>
        <SortOptions onSortChange={handleSort} />
        {sortedReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default ShopReviews;
