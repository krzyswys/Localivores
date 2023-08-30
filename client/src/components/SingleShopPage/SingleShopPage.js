import React from 'react';
import classes from "./SingleShopPage.module.css";
import { TbTruckDelivery, TbPlantOff, TbShoppingCartDiscount } from 'react-icons/tb'
import { LuVegan, LuWheatOff, LuWheat, LuMilk } from 'react-icons/lu'
import { GiPlantWatering, GiFruitTree, GiSteak } from 'react-icons/gi'
import { AiOutlineStar } from 'react-icons/ai'
import { BsCalendar2Week } from 'react-icons/bs'
import { MdWhatshot } from 'react-icons/md'
import { CiApple } from 'react-icons/ci'
import { LiaCarrotSolid } from 'react-icons/lia'



const SingleShopPage = () => {

    return (
        <div className={classes.SSP}>
            <div className={classes.shop_header_container}>
                <div className={classes.shop_slider_container}>

                </div>
                <div className={classes.shop_info_container}>
                    <div className={classes.shop_info}>
                        <div className={classes.reviews_counter_container}> <p className={classes.review_number}><p>4.8</p><AiOutlineStar /></p> <p className={classes.review_count}>(359)</p></div>

                        <h2 className={classes.shop_name}>LOCAL SHOP</h2>
                        <div className={classes.opening_hours_container}><BsCalendar2Week className={classes.shop_icon} /><div><p>MON/FRI: 6:00 - 15:00</p> <p>SAT: 9:00 - 13:00</p></div></div>
                        <div className={classes.shop_delivery}><TbTruckDelivery className={classes.shop_icon} /><p>10 zł</p><p>15 min</p></div>
                        <p className={classes.shop_short_descrption}>Discover the freshest flavors at our local vegetable shop, where vibrant produce sourced from nearby farms paints a colorful palette. Savor the essence of nature's bounty as you explore a diverse selection of seasonal vegetables, all carefully curated to bring the essence of our region's harvest to your table...</p>
                        <div className={classes.extras_container}>
                            <LuVegan />
                            <GiPlantWatering />
                            <TbPlantOff />
                            <LuWheatOff />
                            <LuWheat />
                            <GiFruitTree />
                        </div>


                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0165476869097!2d19.945654483043814!3d50.06833283343086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1ae164baaf%3A0x43265081a4156da2!2zRHdvcnplYyBHxYLDs3dueSBaYWNow7Nk!5e0!3m2!1spl!2spl!4v1690386930990!5m2!1spl!2spl" allowFullScreen="" loading="fast" referrerPolicy="no-referrer-when-downgrade" title='map' className={classes.shop_map}></iframe>

                </div>
            </div>

            <div className={classes.menu_products_container}>
                <div className={classes.about_shop_links}>
                    <div className={classes.about_shop_link}>Products</div>
                    <div className={classes.about_shop_link}>Reviews</div>
                    <div className={classes.about_shop_link}>Gallery</div>
                    <div className={classes.about_shop_link}>News</div>
                    <div className={classes.about_shop_link}>About us</div>
                    <div className={classes.about_shop_link}>Contact</div>
                    <div className={classes.about_shop_link}>Deliveries</div>
                </div>
                <div className={classes.categories_info_block}>
                    <p>Categories</p>
                </div>
                <div className={classes.categories_list_column}>
                    <div className={classes.categories_list_block}><MdWhatshot /><p>Bestsellers</p></div>
                    <div className={classes.categories_list_block}><TbShoppingCartDiscount /><p>Discounted</p></div>
                    <div className={classes.categories_list_block}><LiaCarrotSolid /><p>Vegetables</p></div>
                    <div className={classes.categories_list_block}><CiApple /><p>Fruits</p></div>
                    <div className={classes.categories_list_block}><LuMilk /><p>Dairy</p></div>
                    <div className={classes.categories_list_block}><GiSteak /><p>Meat</p></div>
                </div>
                <div className={classes.router_page}>

                </div>


            </div>

        </div >
    );
};


export default SingleShopPage;
