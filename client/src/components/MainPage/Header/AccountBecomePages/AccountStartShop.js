import React from 'react';
import './AccountBecome.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsShop } from 'react-icons/bs';
import { VscDebugStart } from 'react-icons/vsc';
import { Link } from 'react-router-dom';


const AccountStartShop = () => {

    return (
        <div className='account-become-menu-container' onClick={(e) => e.stopPropagation()}>
            <Link to='/menu' className='go-back-icon'><AiOutlineArrowLeft /></Link>
            <div className='account-become-inner-menu-container'>
                <h2 className='account-become-headline'>
                    <p className='account-become-name'><VscDebugStart /></p> Start <p className='account-become-name'>shop</p> </h2>
                <span className='account-become-line'></span>

                <div className='account-become-options-container'>
                    <p className='become-description'>
                        Put your market on display and become available for whole region. Give yoursefl oportunity to pull clients form all around the region</p>
                    <div className='become-blob'><BsShop className='become-icon' /></div>
                    <button className='become-button'>Start your shop</button>
                    <button className='become-button'>Explore oportunities</button>

                </div>
            </div>
        </div>
    );
};

export default AccountStartShop;
