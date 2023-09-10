import React from 'react';
import classes from "../ReviewsPage.module.css";
import {getIconByTitle} from '../../../../UI/Enums/UtilityIconsEnum'

const ReviewsGraph = ({reviewGraphData}) => {
    const {
        reviewsPercentage,
        AVGReview,
        reviewCount
    } = reviewGraphData;
    Object.values(reviewsPercentage).reduce((total, count) => total + count, 0);
    return (
        <main className={classes.review_graph_container}>
            <section className={classes.number_container}>
                <div className={classes.number_info_container}>
                    <h2>{AVGReview}</h2>
                    <p>({reviewCount})</p>
                </div>
                {getIconByTitle('StarOutline')}
            </section>
            <section className={classes.graph_container}>
                <div className={classes.SPP}>
                    {Object.keys(reviewsPercentage).map((rating, index) => <div key={rating} className={classes.ReviewBar}>
                        <div className={classes.BarContainer}
                        >
                            <div
                                className={classes.BarFill}
                                style={{width: `${(reviewsPercentage[rating])}%`}}
                            />
                            <span className={classes.RatingLabel}>{reviewsPercentage[rating]}%</span>

                        </div>
                    </div>)}
                </div>
            </section>
        </main>
    );
};

export default ReviewsGraph;

