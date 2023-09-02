import React, { useEffect, useState } from 'react';
import classes from "./SingleShopPage.module.css";
import { TbTruckDelivery, TbPlantOff, TbShoppingCartDiscount } from 'react-icons/tb'
import { LuVegan, LuWheatOff, LuWheat, LuMilk } from 'react-icons/lu'
import { GiPlantWatering, GiFruitTree, GiSteak } from 'react-icons/gi'
import { AiOutlineStar } from 'react-icons/ai'
import { BsCalendar2Week } from 'react-icons/bs'
import { Link, Outlet, useLocation } from 'react-router-dom';
import ShopProductsPage from "./ShopProductsPage/ShopProductsPage";
import ShopGalleryPage from "./ShopGalleryPage/ShopGalleryPage";
import { ImageProvider } from "./ShopGalleryPage/ImageContext";
import ShopReviewsPage from "./ShopReviewsPage/ShopReviewsPage";
import ShopAboutPage from "./ShopAboutShopPage/ShopAboutPage";


const SingleShopPage = () => {

    const isActive = (path) => {
        return activeComponent === path;
    };

    const [activeComponent, setActiveComponent] = useState("shop-products");
    const [componentToRender, setComponentToRender] = useState(null);
    const handleMenuClick = (component) => {
        setActiveComponent(component);

    };

    useEffect(() => {
        switch (activeComponent) {
            case 'shop-products':
                setComponentToRender(<ShopProductsPage />);
                break;
            case 'shop-reviews':
                setComponentToRender(<ShopReviewsPage />);
                break;
            case 'shop-gallery':
                setComponentToRender(<ImageProvider >
                    <ShopGalleryPage />
                </ImageProvider>);
                break;
            case 'about-shop':
                setComponentToRender(<ShopAboutPage />);
                break;
            default:
                setComponentToRender(null);
        }
    }, [activeComponent]);

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
                <div className={classes.about_shop_links}>
                    <div onClick={() => handleMenuClick('shop-products')} className={classes.about_shop_link}>
                        <span className={classes.actual_text}>&nbsp;Products&nbsp;</span>
                        <span aria-hidden="true" className={`${classes.hover_text} ${isActive('shop-products') ? classes.hover_text_active : ''}`}>
                            &nbsp;Products&nbsp;
                        </span>
                    </div>
                    <div onClick={() => handleMenuClick('shop-reviews')} className={`${classes.about_shop_link} ${isActive('shop-reviews') ? classes.about_shop_link_active : ''}`}>
                        <span className={classes.actual_text}>&nbsp;Reviews&nbsp;</span>
                        <span aria-hidden="true" className={`${classes.hover_text} ${isActive('shop-reviews') ? classes.hover_text_active : ''}`}>
                            &nbsp;Reviews&nbsp;
                        </span>
                    </div>
                    <div onClick={() => handleMenuClick('shop-gallery')} className={`${classes.about_shop_link} ${isActive('shop-gallery') ? classes.about_shop_link_active : ''}`}>
                        <span className={classes.actual_text}>&nbsp;Gallery&nbsp;</span>
                        <span aria-hidden="true" className={`${classes.hover_text} ${isActive('shop-gallery') ? classes.hover_text_active : ''}`}>
                            &nbsp;Gallery&nbsp;
                        </span>
                    </div>
                    <div onClick={() => handleMenuClick('about-shop')} className={`${classes.about_shop_link} ${isActive('about-shop') ? classes.about_shop_link_active : ''}`}>
                        <span className={classes.actual_text}>&nbsp;About Shop&nbsp;</span>
                        <span aria-hidden="true" className={`${classes.hover_text} ${isActive('about-shop') ? classes.hover_text_active : ''}`}>
                            &nbsp;About&nbsp;Shop&nbsp;
                        </span>
                    </div>
                </div>
            </div>
            {/* <div className={classes.menu_products_container}> */}




            <div className={classes.router_page}>
                {componentToRender}

            </div>

            {/* </div> */}

        </div >
    );
};


export default SingleShopPage;
