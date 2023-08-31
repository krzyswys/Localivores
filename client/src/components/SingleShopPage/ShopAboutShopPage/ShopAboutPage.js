import React from 'react';
import classes from "./ShopAboutPage.module.css";
import { TbCheckbox, TbTrophy } from 'react-icons/tb'
import { AiOutlinePhone } from 'react-icons/ai'





const ShopAboutPage = () => {


    return (
        <div className={classes.SAP}>
            <div className={classes.aboutus_container}>
                <div className={classes.shop_photo_container}></div>
                <div className={classes.shop_description_container}>
                    <div className={classes.shop_aboutus_container}>Who we are?</div>


                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit sem, volutpat sed mauris varius, condimentum vestibulum est. Cras non interdum nunc, in sodales purus. Sed a nisl imperdiet, consectetur nunc et, bibendum ex. Duis consequat urna eu metus interdum tempus. In in est hendrerit, semper turpis in, maximus nulla. Quisque euismod suscipit scelerisque. Morbi a lorem orci. Sed sollicitudin magna id tortor dictum, in aliquam neque gravida. Aliquam accumsan bibendum dictum. Pellentesque orci libero, tempor sit amet mauris tincidunt, blandit ultricies leo.
                        Praesent suscipit lacinia nunc, quis rutrum tortor. Nulla facilisi. Nam interdum sapien nunc, auctor dapibus ex placerat a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>

            </div>

            <div className={classes.special_container}>
                <div className={classes.special_image}></div>


                {/* <div className={classes.lists_container}> */}
                <div className={classes.special_delivery_list_container} >
                    <div className={classes.special_delivery_header}>
                        How&nbsp;we&nbsp;deliver:
                    </div>
                    <div className={classes.special_delivery_item_container}>
                        <TbCheckbox className={classes.special_delivery_item_icon}></TbCheckbox>
                        <div className={classes.special_delivery_item}>Fast delivery</div>
                    </div>
                    <div className={classes.special_delivery_item_container}>
                        <TbCheckbox className={classes.special_delivery_item_icon}></TbCheckbox>
                        <div className={classes.special_delivery_item}>Pickup point</div>
                    </div>
                    <div className={classes.special_delivery_item_container}>
                        <TbCheckbox className={classes.special_delivery_item_icon}></TbCheckbox>
                        <div className={classes.special_delivery_item}>Delivery via trusted service</div>
                    </div>
                    <div className={classes.special_delivery_item_container}>
                        <TbCheckbox className={classes.special_delivery_item_icon}></TbCheckbox>
                        <div className={classes.special_delivery_item}>Safe package</div>
                    </div>
                    <div className={classes.special_list_container} >
                        <div className={classes.special_header}>
                            Our&nbsp;achievements:
                        </div>
                        <div className={classes.special_item_container}>
                            <TbTrophy className={classes.special_item_icon}></TbTrophy>
                            <div className={classes.special_item}>#3 in local rank</div>
                        </div>
                        <div className={classes.special_item_container}>
                            <TbTrophy className={classes.special_item_icon}></TbTrophy>
                            <div className={classes.special_item}>We&nbsp;support&nbsp;local&nbsp;markets</div>
                        </div>
                        <div className={classes.special_item_container}>
                            <TbTrophy className={classes.special_item_icon}></TbTrophy>
                            <div className={classes.special_item}>0 waste production</div>
                        </div>

                    </div>

                </div>
                <div className={classes.special_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit sem, volutpat sed mauris varius, condimentum vestibulum est. Cras non interdum nunc, in sodales purus. Sed a nisl imperdiet, consectetur nunc et, bibendum ex. Duis consequat urna eu metus interdum tempus. In in est hendrerit, semper turpis in, maximus nulla. Quisque euismod suscipit scelerisque. Morbi a lorem orci. Sed sollicitudin magna id tortor dictum,</div>



            </div>
            <div className={classes.aboutus_footer}>

                <div className={classes.contact_container}>
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
                                <div className={classes.call}><AiOutlinePhone /></div>


                            </div>
                        </form>
                    </div>

                </div>
                <div className={classes.discount_holder}>
                    <form className={classes.discountForm}>

                        <span className={classes.DiscountHeading}>TAKE 10% OFF.</span>
                        <p className={classes.DiscountSubheading}>Here is your discount for first order here! The promo code will be sent to your email.</p>
                        <div className={classes.inputContainer}>
                            <input placeholder="Enter your email" type="email" name="email" id={classes.email_address} />
                            <button type="submit" className={classes.submitButton}>Get it!</button>
                        </div>
                        <button className={classes.exitBtn}>×</button>
                    </form>



                </div>
            </div>

        </div>
    );
};
export default ShopAboutPage;
