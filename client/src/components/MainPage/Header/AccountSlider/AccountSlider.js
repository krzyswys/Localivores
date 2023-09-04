import React, { useState, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import '../Header.css';
import AccountLinksList from './AccountLinksList/AccountLinksList';
import AccountSettings from './AccountSettings/AccountSettings';
import AccountStartShop from './AccountBecomePages/AccountStartShop';
import AccountBecomeDriver from './AccountBecomePages/AccountBecomeDriver';
import AccountReportProblem from './AccountReportProblem/AccountReportProblem';
import AccountPromos from './AccountPromos/AccountPromos';
import AccountOrderHistory from './AccountOrderHistory/AccountOrderHistory';
import AccountHistoryDetailsModal from './AccountOrderHistory/AccountHistoryDetailsModal';
import AccountFavourites from './AccountFavourites/AccountFavourites';
import ShopReviews from '../ShopReviews/ShopReviews'
import shopReviewsData from '../ShopReviews/ShopReviewsData';
const AccountSlider = ({ handleMenuToggle, isMenuOpen }) => {
    const menuAnimation = useSpring({
        right: isMenuOpen ? '0' : '-102vw',
        opacity: isMenuOpen ? 1 : 0,
    });

    const [activeComponent, setActiveComponent] = useState("main");
    const [currentOrder, setCurrentOrder] = useState(null);
    const [currentShop, setCurrentShop] = useState(null);
    const handleOrderSet = (order) => {
        setCurrentOrder(order);
    };
    const handleMenuClick = (component) => {
        if (component == null) {
            handleMenuToggle();
            setActiveComponent("main");
        }
        else {
            setActiveComponent(component);
        }
    };

    const handleReviewClick = (shop) => {
        handleMenuClick("shop-reviews");
        setCurrentShop(shopReviewsData[shop]);

    };

    let componentToRender;

    switch (activeComponent) {
        case 'main':
            componentToRender = <AccountLinksList handleMenuClick={handleMenuClick} />;
            break;
        case 'order-history':
            componentToRender = <AccountOrderHistory handleMenuClick={handleMenuClick} handleOrderSet={handleOrderSet} />;
            break;
        case 'settings':
            componentToRender = <AccountSettings handleMenuClick={handleMenuClick} />;
            break;
        case 'start-shop':
            componentToRender = <AccountStartShop handleMenuClick={handleMenuClick} />;
            break;
        case 'become-driver':
            componentToRender = <AccountBecomeDriver handleMenuClick={handleMenuClick} />;
            break;
        case 'report-problem':
            componentToRender = <AccountReportProblem handleMenuClick={handleMenuClick} />;
            break;
        case 'promos':
            componentToRender = <AccountPromos handleMenuClick={handleMenuClick} />;
            break;
        case 'history-details':
            componentToRender = <AccountHistoryDetailsModal order={currentOrder} handleMenuClick={handleMenuClick} handleReviewClick={handleReviewClick} />;
            break;
        case 'favourites':
            componentToRender = <AccountFavourites handleMenuClick={handleMenuClick} />;
            break;
        case 'shop-reviews':
            componentToRender = <ShopReviews shop={currentShop}  handleMenuClick={handleMenuClick}  />;
            break;
        default:
            componentToRender = null;

    }
    return (

        <div className='account-wrapper'>
            <div className='account-container'>
                <animated.div className='animated-div' style={menuAnimation} onClick={handleMenuToggle}>
                    {componentToRender}
                </animated.div>
            </div>
        </div >


    );
};
export default AccountSlider;