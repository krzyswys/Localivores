import React from 'react';
import classes from "./AboutShopPage.module.css";
import special_image from '../../../assets/StockImages/alex-hudson-m3I92SgM3Mk-unsplash.jpg'
import shop_photo_container from '../../../assets/StockImages/nrd-D6Tu_L3chLE-unsplash.jpg'
// import waves1 from '../../../assets/Waves/wave-haikei-page.svg'
import waves2 from '../../../assets/Waves/stacked-waves-haikei-page.svg'
import {getIconByTitle} from "../../../UI/Enums/UtilityIconsEnum"
const AboutShopPage = () => {
    return (
        <div className={classes.SAP} style={{ backgroundImage: `url(${waves2})` }}>
            <header className={classes.aboutus_container}>
                <div className={classes.shop_photo_container} style={{ backgroundImage: `url(${shop_photo_container})` }} />
                <section className={classes.shop_description_container}>
                    <h2>Who we are?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit sem, volutpat sed mauris varius, condimentum vestibulum est. Cras non interdum nunc, in sodales purus. Sed a nisl imperdiet, consectetur nunc et, bibendum ex. Duis consequat urna eu metus interdum tempus. In in est hendrerit, semper turpis in, maximus nulla. Quisque euismod suscipit scelerisque. Morbi a lorem orci. Sed sollicitudin magna id tortor dictum, in aliquam neque gravida. Aliquam accumsan bibendum dictum. Pellentesque orci libero, tempor sit amet mauris tincidunt, blandit ultricies leo.
                        Praesent suscipit lacinia nunc, quis rutrum tortor. Nulla facilisi. Nam interdum sapien nunc, auctor dapibus ex placerat a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </section>
            </header>

            <div className={classes.special_container}>
                <div className={classes.special_image} style={{ backgroundImage: `url(${special_image})` }} />
                <div className={classes.special_delivery_list_container} >
                    <h2>
                        How&nbsp;we&nbsp;deliver:
                    </h2>
                    <div className={classes.special_delivery_item_container}>
                        {getIconByTitle('Checkbox', {
                            className: classes.special_delivery_item_icon,
                        })}
                        <p>Fast delivery</p>
                    </div>
                    <div className={classes.special_delivery_item_container}>
                        {getIconByTitle('Checkbox', {
                            className: classes.special_delivery_item_icon,
                        })}
                        <p>Pickup point</p>
                    </div>
                    <div className={classes.special_delivery_item_container}>
                        {getIconByTitle('Checkbox', {
                            className: classes.special_delivery_item_icon,
                        })}
                        <p>Delivery via trusted service</p>
                    </div>
                    <div className={classes.special_delivery_item_container}>
                        {getIconByTitle('Checkbox', {
                            className: classes.special_delivery_item_icon,
                        })}
                        <p>Safe package</p>
                    </div>
                    <section className={classes.special_list_container} >
                        <h2>
                            Our&nbsp;achievements:
                        </h2>
                        <div className={classes.special_item_container}>
                            {getIconByTitle('Trophy', {
                                className: classes.special_item_icon,
                            })}
                            <p>#3 in local rank</p>
                        </div>
                        <div className={classes.special_item_container}>
                            {getIconByTitle('Trophy', {
                                className: classes.special_item_icon,
                            })}
                            <p>We&nbsp;support&nbsp;local&nbsp;markets</p>
                        </div>
                        <div className={classes.special_item_container}>
                            {getIconByTitle('Trophy', {
                                className: classes.special_item_icon,
                            })}
                            <p>0 waste production</p>
                        </div>
                    </section>
                </div>
                <p className={classes.special_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit sem, volutpat sed mauris varius, condimentum vestibulum est. Cras non interdum nunc, in sodales purus. Sed a nisl imperdiet, consectetur nunc et, bibendum ex. Duis consequat urna eu metus interdum tempus. In in est hendrerit, semper turpis in, maximus nulla. Quisque euismod suscipit scelerisque. Morbi a lorem orci. Sed sollicitudin magna id tortor dictum,</p>
            </div>

            <footer className={classes.aboutus_footer}>
                <section className={classes.contact_container}>
                    <div className={classes.card}>
                        <span className={classes.title}>Contact this shop</span>
                        <form className={classes.form}>
                            <div className={classes.group}>
                                <input placeholder="‎" type="text" required="" />
                                <label for="name">Topic</label>
                            </div>
                            <div className={classes.group}>
                                <input placeholder="‎" type="email" id="email" name="email" required="" />
                                <label for="email">Email</label>
                            </div>
                            <div className={classes.group}>
                                <textarea placeholder="‎" id="comment" name="comment" rows="5" required=""></textarea>
                                <label for="comment">Messeage</label>
                            </div>
                            <div className={classes.contact_type_container}>
                                <button type="submit">Send</button>
                                <div className={classes.call}>
                                    {getIconByTitle('Phone')}
                                   </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section className={classes.discount_holder}>
                    <form className={classes.discountForm}>
                        <span className={classes.DiscountHeading}>TAKE 10% OFF.</span>
                        <p className={classes.DiscountSubheading}>Here is your discount for first order here! The promo code will be sent to your email.</p>
                        <div className={classes.inputContainer}>
                            <input placeholder="Enter your email" type="email" name="email" id={classes.email_address} />
                            <button type="submit" className={classes.submitButton}>Get it!</button>
                        </div>
                        <button className={classes.exitBtn}>×</button>
                    </form>
                </section>
            </footer>
        </div>
    );
};
export default AboutShopPage;
