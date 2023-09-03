import React, { useState } from 'react';
import classes from './AccountOrderHistory.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';


import { LuHistory } from 'react-icons/lu';
import { BiTime } from 'react-icons/bi';
import OrderHistorySummaryBlock from './OrderHistorySummaryBlock';







const AccountOrderHistory = ({ handleMenuClick, handleOrderSet }) => {
    const order = {
        date: '20.21.2020',
        value: '21 $',
        weight: '0.5 kg',
        time: '21 min',
        status: 'completed',
        order_number: '2137',
        id: '12321312312',
        products: {
            shop1: ["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"],
            shop2: ["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"],
            shop3: ["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"],
            shop4: ["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"],
            shop5: ["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"],
            shop6: ["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"]
        }
    };

    return (
        <div className={classes.account_settings_menu_container} onClick={(e) => e.stopPropagation()}>
            <div className={classes.go_back_icon} onClick={() => handleMenuClick("main")}><AiOutlineArrowLeft /></div>
            <div className={classes.account_settings_inner_menu_container}>
                <h2 className={classes.account_settings_headline}>
                    <p className={classes.account_settings_name}><LuHistory /></p> Order history
                </h2>
                <span className={classes.account_settings_line}></span>

                <OrderHistorySummaryBlock order={order} handleMenuClick={handleMenuClick} handleOrderSet={handleOrderSet} />
                <OrderHistorySummaryBlock order={order} handleMenuClick={handleMenuClick} handleOrderSet={handleOrderSet} />
                <OrderHistorySummaryBlock order={order} handleMenuClick={handleMenuClick} handleOrderSet={handleOrderSet} />
                <OrderHistorySummaryBlock order={order} handleMenuClick={handleMenuClick} handleOrderSet={handleOrderSet} />
                <OrderHistorySummaryBlock order={order} handleMenuClick={handleMenuClick} handleOrderSet={handleOrderSet} />

            </div>
        </div>
    );
};

export default AccountOrderHistory;
