import React, {useState} from 'react';
import classes from "./ReviewsPage.module.css";
import ReviewsGraph from './ReviewGraph/ReviewGraph';
import SingleReview from './SingleReview';
import Slider from '../../../UI/Slider/Slider';
import reviewData from '../../../assets/Data/SingleShopData/reviewsData.json'

const pinnedReviewStyle = {
    boxShadow: 'none',
    width: '100%',
    height: '100%',
    zIndex: '0',
    background: '#ffffff3f',
    backdropFilter: 'blur(10px)',
    margin: '0',
    borderRadius: '0'
};
const SortOptions = {
    LATEST: 'LATEST',
    OLDEST: 'OLDEST',
    BEST: 'BEST',
    WORST: 'WORST',
};
const ReviewsPage = () => {
    const {
        reviewGraphData,
        pinnedReview,
        reviews,
    } = reviewData;
    const [selectedReview, setSelectedReview] = useState(null);
    const [selectedImageLinks, setSelectedImageLinks] = useState([]);
    const [selectedSortOption, setSelectedSortOption] = useState(SortOptions.LATEST);
    const handleSortChange = (sortOption) => {
        setSelectedSortOption(sortOption);
    };
    const handleReviewClick = (imageLinks, index) => {
        setSelectedReview(index);
        setSelectedImageLinks(imageLinks);
    };
    return (
        <main className={classes.SSP}>
            <header className={classes.header_container}>

                <div className={classes.pinned_comment_container}>
                    <label className={classes.text}>Pinned review by owner</label>
                    <div className={classes.pinned_comment}>
                        <SingleReview onReviewClick={handleReviewClick} pinnedReviewStyle={pinnedReviewStyle}
                                      review={pinnedReview}/>
                    </div>
                </div>
                <ReviewsGraph reviewGraphData={reviewGraphData}/>
            </header>
            <section className={classes.reviews_container}>
                <div className={classes.filters_container}>
                    {Object.values(SortOptions).map((sortOption) => (
                        <p
                            key={sortOption}
                            className={`${classes.filter_element} ${selectedSortOption === sortOption ? classes.selected : ''}`}
                            onClick={() => handleSortChange(sortOption)}
                        >
                            {sortOption}
                        </p>
                    ))}
                </div>
                {reviews.map((review, index) => (
                    <SingleReview onReviewClick={handleReviewClick} review={review} key={index}/>
                ))}
            </section>
            {(selectedReview != null) && <Slider imageLinks={selectedImageLinks} startIndex={selectedReview}
                                                 onExit={handleReviewClick}/>}
        </main>
    );
};
export default ReviewsPage;
