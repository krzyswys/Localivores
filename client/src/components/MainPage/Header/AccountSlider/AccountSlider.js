import React, { useState, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import '../Header.css';
import AccountLinksList from './AccountLinksList/AccountLinksList';
import AccountSettings from './AccountSettings/AccountSettings';
import AccountStartShop from './AccountBecomePages/AccountStartShop';
import AccountBecomeDriver from './AccountBecomePages/AccountBecomeDriver';
import AccountReportProblem from './AccountReportProblem/AccountReportProblem';
import AccountPromos from './AccountPromos/AccountPromos';


const AccountSlider = ({ handleMenuToggle, isMenuOpen }) => {
    const menuAnimation = useSpring({
        right: isMenuOpen ? '0' : '-102vw',
        opacity: isMenuOpen ? 1 : 0,
    });

    const [activeComponent, setActiveComponent] = useState("main");
    const handleMenuClick = (component) => {
        if (component == null) {
            handleMenuToggle();
            setActiveComponent("main");
        }
        else {
            setActiveComponent(component);
        }
    };

    let componentToRender;

    switch (activeComponent) {
        case 'main':
            componentToRender = <AccountLinksList handleMenuClick={handleMenuClick} />;
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