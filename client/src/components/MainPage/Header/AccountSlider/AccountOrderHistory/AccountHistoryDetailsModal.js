import React from 'react';
import classes from './AccountOrderHistory.module.css';
import { AiOutlineArrowLeft, AiOutlineShop } from 'react-icons/ai';
import { BsFillClipboardCheckFill } from 'react-icons/bs';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';

const AccountHistoryDetailsModal = ({ order, handleMenuClick }) => {
    return (
        <div className={classes.account_settings_menu_container} onClick={(e) => e.stopPropagation()}>
            <div className={classes.go_back_icon} onClick={() => handleMenuClick("order-history")}><AiOutlineArrowLeft /></div>
            <div className={classes.history_order_details_container}>
                <div className={classes.order_header}>
                    <div className={classes.order_inner_header}>
                        <h2>Your order:</h2>
                        <p>Order number:&nbsp;{order.order_number}</p>
                        <button>Order again</button>
                    </div>

                </div>
                <div className={classes.order_details_container}>
                    <div className={classes.order_status_info_container}>
                        <BsFillClipboardCheckFill size={40} className={classes.status_icon} />
                        <div className={classes.order_status}>
                            <h2>{order.status}</h2>
                            <h3>{order.date}</h3>
                            <p>Order ID: {order.id}</p>
                        </div>
                    </div>
                    <div className={classes.products_container}>
                        {Object.entries(order.products)
                            .slice(0, 2)
                            .map(([shopName, products]) => (
                                <div key={shopName} className={classes.single_product_container}>
                                    <h2>
                                        <button>Review</button>
                                        <p>{shopName}</p>
                                    </h2>
                                    {products.slice(0, 5).map((product, index) => (
                                        <div key={index} className={classes.product_info_container}>
                                            <div className={classes.product_multiplyer_contaienr}>
                                                <p className={classes.product_multiplyer}>2x</p>
                                                <div className={classes.product_name_container}>
                                                    <p className={classes.product_name}>{product}</p>
                                                    <p className={classes.product_weight}>200g</p>
                                                </div>
                                            </div>
                                            <p>2.3$</p>
                                        </div>
                                    ))}
                                    <h3 className={classes.shop_summary}>
                                        <div className={classes.product_name_container}>
                                            <p className={classes.product_name}>5 items</p>
                                            <p className={classes.product_weight}>0.5 kg</p>
                                        </div>
                                        <p>23$</p>
                                    </h3>
                                </div>
                            ))}

                    </div>
                    <div className={classes.delivery_details}>
                        <h2>Delivery:&nbsp;{order.time}</h2>
                        <div className={classes.delivery_from}><AiOutlineShop size={35} className={classes.delivery_icon} /> <p>Jana pawła 2<br /> 33,<br /> Kraków, Poland</p></div>
                        <div className={classes.delivery_to}><PiPersonArmsSpreadFill size={35} className={classes.delivery_icon_dest} /> <p>Adama Mickiewicza, <br /> 3c, <br /> Kraków, Poland</p></div>
                    </div>
                    <div className={classes.spacerr}>
                        <div className={classes.wave}></div>
                    </div>
                    <div className={classes.payment_details}>
                        <h2>Summary:</h2>
                        <div className={classes.summary_detail}><p>Processing fee</p><p>0.5 $</p></div>
                        <div className={classes.summary_detail}><p>Delivery</p><p>5 $</p></div>
                        <div className={classes.summary_detail}><p>Products</p><p>50 $</p></div>
                        <div className={classes.summary_detail}><p>Payment method</p><p>cash</p></div>
                        <div className={classes.summary_detail}><p>Togheter </p><p>55.5 $</p></div>

                    </div>

                </div>
            </div >
        </div >
    );
};

export default AccountHistoryDetailsModal;
