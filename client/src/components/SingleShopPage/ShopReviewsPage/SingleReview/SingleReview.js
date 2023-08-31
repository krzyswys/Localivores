import React, { useMemo } from 'react';
import classes from "../ShopReviewsPage.module.css";
import { AiOutlineStar, AiFillHeart } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { BsFillTrash3Fill } from 'react-icons/bs'




const SingleReview = ({ onReviewClick }) => {
    const generateImageLink = (id, width, height) => `https://picsum.photos/id/${id}/${width}/${height}`;

    const imageLinks = Array(Math.floor(Math.random() * 6) + 1).fill(null).map((_, index) => {
        let randomId = Math.floor(Math.random() * 50);
        let width = Math.floor(Math.random() * 40) + 40;
        let height = Math.floor(Math.random() * 40) + 40;
        return generateImageLink(randomId, width, height);
    });
    const memoizedImageLinks = useMemo(() => imageLinks, []);

    const photos = memoizedImageLinks.slice(0, 5).map((link, index) => (
        <div key={index} className={classes.image_item} style={{ backgroundImage: `url(${link})` }} onClick={() => onReviewClick(memoizedImageLinks, index)}></div>
    ));

    return (
        <div className={classes.single_review_container} >
            <div className={classes.avatar_container}>
                <MdAccountCircle className={classes.avatar} />
            </div>
            <div className={classes.main_container}>
                <div className={classes.header}>
                    <p className={classes.user_name}>Jan</p>
                    <div className={classes.user_rating}><AiOutlineStar /><AiOutlineStar /> <AiOutlineStar /><AiOutlineStar /></div>
                </div>
                <div className={classes.review_content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis lacus. Praesent et fringilla orci. Maecenas eleifend nisl a libero tincidunt, a semper tellus ultrices. Ut lectus orci, consequat in est quis, sollicitudin elementum lectus. Duis lectus nunc, egestas at massa at, consequat ornare tortor. </div>
                <div className={classes.photos_container}>
                    {photos}
                </div>
                <div className={classes.footer}>
                    <div className={classes.footer_element}><AiFillHeart /> (10)</div>
                    <div className={classes.footer_element}><BsFillTrash3Fill /> (1)</div>
                </div>

            </div>
            <div className={classes.date_holder}>Created: 21.37.1969</div>
        </div >
    );
};


export default React.memo(SingleReview);
