import React, { useState } from 'react';
import classes from "./SingleShopPage.module.css";
import { componentMap, ComponentEnum } from '../../UI/Enums/ShopComponentEnum';
import ShopHeader from './ShopHeader';
import shop_info from '../../assets/Data/SingleShopData/shop_info.json'

const SingleShopPage = () => {
    const [activeComponent, setActiveComponent] = useState(ComponentEnum.SHOP_PRODUCTS);

    const isActive = (path) => {
        return activeComponent === path;
    };

    const handleMenuClick = (component) => {
        setActiveComponent(component);
    };

    const menuLinks = [
        { label: 'Products', component: ComponentEnum.SHOP_PRODUCTS },
        { label: 'Reviews', component: ComponentEnum.SHOP_REVIEWS },
        { label: 'Gallery', component: ComponentEnum.SHOP_GALLERY },
        { label: 'About_Shop', component: ComponentEnum.ABOUT_SHOP },
    ];

    return (
        <main className={classes.SSP}>
            <header className={classes.shop_header_container}>
                <ShopHeader shop_info={shop_info} />
                <section className={classes.about_shop_links}>
                    {menuLinks.map((link) => (
                        <div
                            key={link.component}
                            onClick={() => handleMenuClick(link.component)}
                            className={`${classes.about_shop_link} `}
                        >
                            <span>&nbsp;{link.label}&nbsp;</span>
                            <span
                                aria-hidden="true"
                                className={`${classes.hover_text} ${isActive(link.component) ? classes.hover_text_active : ''}`}
                            >
                &nbsp;{link.label}&nbsp;
              </span>
                        </div>
                    ))}
                </section>
            </header>
            <React.Fragment>
                {componentMap[activeComponent]}
            </React.Fragment>
        </main>
    );
};

export default SingleShopPage;