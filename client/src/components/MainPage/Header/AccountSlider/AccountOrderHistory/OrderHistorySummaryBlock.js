import React, { useState } from 'react';
import classes from './AccountOrderHistory.module.css';
import { BiTime } from 'react-icons/bi';
import { GrStatusInfo } from 'react-icons/gr';









const OrderHistorySummaryBlock = ({ order, handleMenuClick, handleOrderSet }) => {


    return (


        <div className={classes.account_single_order_element_container} onClick={() => {
            handleMenuClick("history-details");
            handleOrderSet(order);
        }}>
            <div className={classes.value_info_container}>
                <div className={classes.value_info_status}><GrStatusInfo />&nbsp;{order.status}</div>
                <div className={classes.value_info_date}><BiTime />&nbsp;{order.date}</div>

            </div>



            <div className={classes.order_items_container} >
                {Object.entries(order.products)
                    .slice(0, 2)
                    .map(([shopName, products]) => (
                        <div key={shopName}>
                            <h2>{shopName}</h2>
                            {products.slice(0, 5).map((product, index) => (
                                <p key={index}>
                                    <p>2x&nbsp;</p>
                                    {product}&nbsp;
                                    <p>200g</p>
                                </p>
                            ))}
                        </div>
                    ))}

            </div>

            <div className={classes.action_buttons_container}>
                <div className={classes.value_info}>{order.value}</div>

                <div className={classes.order_again_button} onClick={(e) => e.stopPropagation()}>Order again</div>
            </div>

        </div>
    );
};

export default OrderHistorySummaryBlock;
