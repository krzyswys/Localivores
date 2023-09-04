import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ReviewItem from './ReviewItem'; 
import NewReview from './NewReview'; 
import classes from '../AccountOrderHistory/AccountOrderHistory.module.css';
import styles from './ShopReviews.module.css'
const ShopReviews = (props) => {
    const { reviews } = props.shop;

    // Add a function to handle new review submissions
    const handleReviewSubmit = (newReview) => {
        // For now, just logging the new review. In a real application, you'd likely make an API call or update state.
        console.log('New Review:', newReview);
    };

    if (!reviews) return null;

    return (
        <div className={`${classes.account_settings_menu_container} ${styles.container}`} onClick={(e) => e.stopPropagation()}>
            <div className={classes.go_back_icon} onClick={() => props.handleMenuClick("history-details")}><AiOutlineArrowLeft /></div>
            <h1>Shop reviews</h1>
            
            <NewReview onSubmit={handleReviewSubmit} />
            <ul className={styles.reviewList}>
                {reviews.map((review, index) => (
                    <ReviewItem key={index} review={review} />
                ))}
            </ul>

            

        </div>
    )
}

export default ShopReviews;
