import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar, AiOutlineCar, AiOutlineShop } from 'react-icons/ai';
import { GoHistory } from 'react-icons/go';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { BsCardChecklist, BsSendExclamation } from 'react-icons/bs';
import { CiDiscount1 } from 'react-icons/ci';
import { BiLogOutCircle } from 'react-icons/bi';
import './AccountLinksList.css';


const AccountLinksList = ({ handleMenuClick }) => {


    return (
        <div className='account-menu-container' onClick={(e) => e.stopPropagation()}>
            <div className='account-inner-menu-container'>
                <h2 className='account-headline'>
                    Welcome, <p className='account-name'>Jan Paweł</p>
                </h2>
                <span className='account-line'></span>
                <div className='account-options-container'>
                    <div className={`account-option-container `} onClick={() => handleMenuClick('main')}>
                        <p>
                            <GoHistory className='account-options-icon' />
                            Order history
                        </p>
                        <div className='account-option-hover-underline'></div>
                    </div>
                    <div className={`account-option-container `} onClick={() => handleMenuClick('settings')}
                    >
                        <p>
                            <MdOutlineManageAccounts className='account-options-icon' />
                            Account settings
                        </p>
                        <div className='account-option-hover-underline'></div>
                    </div>
                    <div className='account-option-container' onClick={() => handleMenuClick('main')}>
                        <p><BsCardChecklist className='account-options-icon' />Your lists</p>
                        <div className='account-option-hover-underline'></div>
                    </div>
                    <div className='account-option-container' >
                        <p><AiOutlineStar className='account-options-icon' />Favourites</p>
                        <div className='account-option-hover-underline'></div>
                    </div>
                    <div className='account-option-container' onClick={() => handleMenuClick('become-driver')}>
                        <p><AiOutlineCar className='account-options-icon' />Become driver</p>
                        <div className='account-option-hover-underline'></div>
                    </div>
                    <div className='account-option-container' onClick={() => handleMenuClick('start-shop')}>
                        <p><AiOutlineShop className='account-options-icon' />Start shop</p>
                        <div className='account-option-hover-underline'></div>
                    </div>
                    <div className='account-option-container' onClick={() => handleMenuClick('promos')}>
                        <p><CiDiscount1 className='account-options-icon' />Your promos</p>
                        <div className='account-option-hover-underline'></div>
                    </div>
                    <div className='account-option-container' onClick={() => handleMenuClick('report-problem')}>
                        <p><BsSendExclamation className='account-options-icon' />Report problem</p>
                        <div className='account-option-hover-underline'></div>
                    </div>
                </div>
            </div>
            <p className='logout-account' >
                <BiLogOutCircle className='account-options-icon logout-icon' />
                Log out
            </p>
        </div>

    );
};

export default AccountLinksList;


{/* <p>Name</p>
<p>Email</p>
<p>Phone number</p>
<p>Change password</p>
<p>Payments methods</p>
<p>Notifications</p>
<p>Privacy policy</p> */}