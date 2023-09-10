import React from 'react';
import classes from "./SingleShopPage.module.css";
import {getIconByTitle} from '../../UI/Enums/SpecialIconsEnum';
import shop_header_image from '../../assets/StockImages/josh-wilburne-KZuX70oDBKA-unsplash.jpg'
import {getIconByTitle as getUtilityIcon}  from "../../UI/Enums/UtilityIconsEnum"

const ShopHeader = ({shop_info}) => {
    const {
        // imageUrl,
        reviewAVG,
        reviewCount,
        shopName,
        OPEN_MO_FRI,
        OPEN_SAT,
        PRED_deliveryCost,
        PRED_deliveryTime,
        shopDescription,
        specials,
    } = shop_info;

    return (
        <React.Fragment>
            <div className={classes.shop_slider_container} style={{backgroundImage: `url(${shop_header_image})`}}/>
            <div className={classes.shop_info_container}>
                <section className={classes.shop_info}>
                    <div className={classes.reviews_counter_container}>
                        <p className={classes.review_number}><p>{reviewAVG}</p>{getUtilityIcon('StarOutline')}></p>
                        <p className={classes.review_count}>({reviewCount})</p></div>
                    <h2 className={classes.shop_name}>{shopName}</h2>
                    <div className={classes.opening_hours_container}>
                        {getUtilityIcon('Calendar', {
                            className: classes.shop_icon
                        })}

                        <div><p>MON/FRI:&nbsp;{OPEN_MO_FRI}</p> <p>SAT: &nbsp;{OPEN_SAT}</p></div>
                    </div>
                    <div className={classes.shop_delivery}>
                        {getUtilityIcon('Truck', {
                            className: classes.shop_icon
                        })}
                        />
                        <p>{PRED_deliveryCost}</p><p>{PRED_deliveryTime}</p></div>
                    <p className={classes.shop_short_descrption}>{shopDescription}</p>
                    <div className={classes.extras_container}>
                        {specials.map((special, index) => (
                            <React.Fragment key={index}>
                                {getIconByTitle(special)}
                            </React.Fragment>
                        ))}
                    </div>
                </section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0165476869097!2d19.945654483043814!3d50.06833283343086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1ae164baaf%3A0x43265081a4156da2!2zRHdvcnplYyBHxYLDs3dueSBaYWNow7Nk!5e0!3m2!1spl!2spl!4v1690386930990!5m2!1spl!2spl"
                    allowFullScreen="" loading="fast" referrerPolicy="no-referrer-when-downgrade" title='map'
                    className={classes.shop_map}></iframe>
            </div>
        </React.Fragment>
    )
}
export default ShopHeader;