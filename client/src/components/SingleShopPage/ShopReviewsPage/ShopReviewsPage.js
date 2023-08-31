import React, { useState } from 'react';
import classes from "./ShopReviewsPage.module.css";
import { AiOutlineStar } from 'react-icons/ai'
import ShopReviewsGraph from './ReviewGraph/ShopReviewGraph';
import SingleReview from './SingleReview/SingleReview';
import SingleReviewPinned from './SingleReview/SingleReviewPinned';
import ReviewSlider from './Slider/ReviewSlider';

const ShopReviewsPage = () => {
    const reviews_count = {
        "1": 1,
        "2": 9,
        "3": 5,
        "4": 30,
        "5": 55
    };

    const [selectedReview, setSelectedReview] = useState(null);
    const [selectedImageLinks, setSelectedImageLinks] = useState([]);

    const handleReviewClick = (imageLinks, index) => {
        setSelectedReview(index);
        setSelectedImageLinks(imageLinks);
        console.log(imageLinks, index)
    };
    return (
        <div className={classes.SSP} >
            <div className={classes.header_container}>
                <div className={classes.pinned_comment_container}>
                    <label className={classes.text}>Pinned review by owner</label>
                    <div className={classes.pinned_comment} >
                        <SingleReviewPinned />
                    </div>
                </div>
                <div className={classes.review_graph_container}>
                    <div className={classes.number_container}>
                        <div className={classes.number_info_container}>
                            <div className={classes.number}>4.7</div>
                            <p>(390)</p>
                        </div>
                        <AiOutlineStar />
                    </div>
                    <div className={classes.graph_container}>
                        <ShopReviewsGraph reviews={reviews_count} />
                    </div>
                </div>
            </div>
            <div className={classes.reviews_container}>
                <div className={classes.filters_container}>
                    <div className={classes.filter_element}>LATEST</div>
                    <div className={classes.filter_element}>OLDEST</div>
                    <div className={classes.filter_element}>BEST</div>
                    <div className={classes.filter_element}>WORST</div>
                </div>
                <SingleReview onReviewClick={handleReviewClick} />
                <SingleReview onReviewClick={handleReviewClick} />
                <SingleReview onReviewClick={handleReviewClick} />
                <SingleReview onReviewClick={handleReviewClick} />
                <SingleReview onReviewClick={handleReviewClick} />
            </div>
            {(selectedReview != null) && <ReviewSlider imageLinks={selectedImageLinks} index={selectedReview} onReviewClick={handleReviewClick} />}
        </div >
    );
};


export default ShopReviewsPage;
