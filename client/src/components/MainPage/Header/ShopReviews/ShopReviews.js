import { AiOutlineArrowLeft, AiOutlineShop } from 'react-icons/ai';
import classes from '../AccountSlider/AccountOrderHistory/AccountOrderHistory.module.css';

const ShopReviews = (props) => {
    console.log(props);
    const { reviews } = props.shop;
    if(!reviews) return null;
    return (
        <div className={classes.account_settings_menu_container} onClick={(e) => e.stopPropagation()}>
            <div className={classes.go_back_icon} onClick={() => props.handleMenuClick("history-details")}><AiOutlineArrowLeft /></div>
            <h1>Shop reviews</h1>
            
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <h3>{review.author}</h3>
                        <p>{review.date}</p>
                        <p>{review.content}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Thumbs Up: {review.thumbsUp}</p>
                        <p>Thumbs Down: {review.thumbsDown}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShopReviews;
