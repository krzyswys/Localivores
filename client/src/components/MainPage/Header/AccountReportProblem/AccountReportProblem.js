import React from 'react';
import './AccountReportProblem.css';
import { AiOutlineArrowLeft, AiOutlineWarning } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const AccountReportProblem = () => {

    return (
        <div className='account-become-menu-container' onClick={(e) => e.stopPropagation()}>
            <Link to='/menu' className='go-back-icon'><AiOutlineArrowLeft /></Link>
            <div className='account-become-inner-menu-container'>
                <h2 className='account-become-headline'>
                    <p className='account-become-name'><AiOutlineWarning /></p> Report <p className='account-become-name'>problem</p> </h2>
                <span className='account-become-line'></span>

                <div className='account-become-options-container'>


                </div>
            </div>
        </div>
    );
};

export default AccountReportProblem;
