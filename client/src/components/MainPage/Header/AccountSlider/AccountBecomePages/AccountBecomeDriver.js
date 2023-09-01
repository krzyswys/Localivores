import React from 'react';
import './AccountBecome.css';
import { AiOutlineArrowLeft, AiOutlineCar } from 'react-icons/ai';
import { VscDebugStart } from 'react-icons/vsc';
import { Link } from 'react-router-dom';


const AccountBecomeDriver = ({ handleMenuClick }) => {

    return (
        <div className='account-become-menu-container' onClick={(e) => e.stopPropagation()}>
            <div onClick={() => handleMenuClick("main")} className='go-back-icon'><AiOutlineArrowLeft /></div>
            <div className='account-become-inner-menu-container'>
                <h2 className='account-become-headline'>
                    <p className='account-become-name'><VscDebugStart /></p> Become <p className='account-become-name'>driver</p> </h2>
                <span className='account-become-line'></span>

                <div className='account-become-options-container'>
                    <p className='become-description'>

                        Explore new possibilities of side earning by joining our drivers community - become your boss, define own working ours and work area</p>
                    <div className='become-blob'><AiOutlineCar className='become-icon' /></div>
                    <button className='become-button'>Become driver</button>
                    <button className='become-button'>Find more about profits</button>

                </div>
            </div>
        </div>
    );
};

export default AccountBecomeDriver;
