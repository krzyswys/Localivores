import React from 'react';
import classes from "../ShopReviewsPage.module.css";





const ShopReviewsGraph = ({ reviews }) => {
    const totalReviews = Object.values(reviews).reduce((total, count) => total + count, 0);

    return (
        <div className={classes.SPP}>
            {Object.keys(reviews).map((rating, index) => (
                <div key={rating} className={classes.ReviewBar}>
                    <div
                        className={classes.BarContainer}

                    >
                        <div
                            className={classes.BarFill}
                            style={{ width: `${(reviews[rating])}%` }}
                        />
                        <span className={classes.RatingLabel}>{reviews[rating]}%</span>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShopReviewsGraph;

