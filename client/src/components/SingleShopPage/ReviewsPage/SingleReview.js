import React, { useMemo } from 'react';
import classes from "./ReviewsPage.module.css";
import {getIconByTitle} from "../../../UI/Enums/UtilityIconsEnum";
const generateImageLink = (id, width, height) => `https://picsum.photos/id/${id}/${width}/${height}`;
const generateRandomImageLinks = () => {
    return Array(Math.floor(Math.random() * 6) + 1).fill(null).map((_, index) => {
        let randomId = Math.floor(Math.random() * 50);
        let width = Math.floor(Math.random() * 40) + 40;
        let height = Math.floor(Math.random() * 40) + 40;
        return generateImageLink(randomId, width, height);
    });
}
const SingleReview = ({ onReviewClick, pinnedReviewStyle,review }) => {
    const {
        // images,
        userName,
        userRating,
        reviewDescription,
        upVotes,
        downVotes,
        creationDate
    } = review;
    const imageLinks = useMemo(() => generateRandomImageLinks(), []);
    const photos = imageLinks.slice(0, 5).map((link, index) => (
        <div key={index} className={classes.image_item} style={{ backgroundImage: `url(${link})` }} onClick={() => onReviewClick(imageLinks, index)}></div>
    ));

    return (
        <main className={classes.single_review_container} style={pinnedReviewStyle} >
            <div className={classes.avatar_container}>
                {getIconByTitle('AccountAvatar', {
                    className: classes.avatar
                })}
            </div>
            <section className={classes.main_container}>
                <header className={classes.header}>
                    <p className={classes.user_name}>{userName}</p>
                    <div className={classes.user_rating}>
                        {Array.from({ length: userRating }, (_, index) => (
                            getIconByTitle('StarFill', {key: index})
                        ))}
                    </div>
                </header>
                <p className={classes.review_content}> {reviewDescription} </p>
                <div className={classes.photos_container}>
                    {photos.map((photo) => (
                        <React.Fragment>
                            {photo}
                        </React.Fragment>
                    ))}
                </div>
                <footer className={classes.footer}>
                    <div className={classes.footer_element}>{getIconByTitle('Heart')}({upVotes})</div>
                    <div className={classes.footer_element}>{getIconByTitle('Trash')} ({downVotes})</div>
                </footer>
            </section>
            <p className={classes.date_holder}>Created:&nbsp;{creationDate}</p>
        </main >
    );
};
export default React.memo(SingleReview);
