import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar, AiOutlineCar, AiOutlineShop } from 'react-icons/ai';
import { GoHistory } from 'react-icons/go';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { BsCardChecklist, BsSendExclamation } from 'react-icons/bs';
import { CiDiscount1 } from 'react-icons/ci';
import { BiLogOutCircle } from 'react-icons/bi';
import './AccountLinksList.css';

const AccountLinksList = () => {


    return (
        <div className='account-menu-container' onClick={(e) => e.stopPropagation()}>
            <div className='account-inner-menu-container'>
                <h2 className='account-headline'>
                    Welcome, <p className='account-name'>Jan Paweł</p>
                </h2>
                <span className='account-line'></span>
                <div className='account-options-container'>
                    <Link to='/order-history' className='account-option-container'>
                        <p>
                            <GoHistory className='account-options-icon' />
                            Order history
                        </p>
                        <div className='account-option-hover-underline'></div>
                    </Link>
                    <Link to='/account-settings' className='account-option-container' exact>
                        <p>
                            <MdOutlineManageAccounts className='account-options-icon' />
                            Account settings
                        </p>
                        <div className='account-option-hover-underline'></div>
                    </Link>
                    <Link className='account-option-container'>
                        <p><BsCardChecklist className='account-options-icon' />Your lists</p>
                        <div className='account-option-hover-underline'></div>
                    </Link>
                    <Link className='account-option-container'>
                        <p><AiOutlineStar className='account-options-icon' />Favourites</p>
                        <div className='account-option-hover-underline'></div>
                    </Link>
                    <Link to="/account-become-driver" className='account-option-container'>
                        <p><AiOutlineCar className='account-options-icon' />Become driver</p>
                        <div className='account-option-hover-underline'></div>
                    </Link>
                    <Link to="/account-start-shop" className='account-option-container'>
                        <p><AiOutlineShop className='account-options-icon' />Start shop</p>
                        <div className='account-option-hover-underline'></div>
                    </Link>
                    <Link to="/account-promos" className='account-option-container'>
                        <p><CiDiscount1 className='account-options-icon' />Your promos</p>
                        <div className='account-option-hover-underline'></div>
                    </Link>
                    <Link to="/account-report-problem" className='account-option-container'>
                        <p><BsSendExclamation className='account-options-icon' />Report problem</p>
                        <div className='account-option-hover-underline'></div>
                    </Link>
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