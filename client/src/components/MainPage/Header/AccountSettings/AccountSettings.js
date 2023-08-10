import React, { useState } from 'react';
import './AccountSettings.css';
import { AiOutlinePlus, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineArrowLeft } from 'react-icons/ai';
import { GoTriangleRight, GoLinkExternal } from 'react-icons/go';
import { BsFillGearFill } from 'react-icons/bs';



import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const AccountSettings = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [street, setStreet] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isPasswordExpanded, setPasswordExpanded] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isNotificationOn, setNotificationOn] = useState(true);
    const [isPL, setLanguage] = useState(true);
    const [expandedPayments, setExpandedPayments] = useState(false);
    const [isAddressExpanded, setAddressExpanded] = useState(false);

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleStreetChange = (e) => {
        setStreet(e.target.value);
    }; const handleApartmentChange = (e) => {
        setApartment(e.target.value);
    }; const handleCityChange = (e) => {
        setCity(e.target.value);
    };
    const handlePasswordToggle = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmNewPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
    };
    const handleNotificationToggle = () => {
        setNotificationOn((prevState) => !prevState);
    };
    const handleLanguageToggle = () => {
        setLanguage((prevState) => !prevState);
    };

    const toggleExpandedPayments = () => {
        setExpandedPayments(!expandedPayments);
    };
    const toggleExpandedPasswords = () => {
        setPasswordExpanded(!isPasswordExpanded);
    };
    const toggleExpandedAddress = () => {
        setAddressExpanded(!isAddressExpanded);
    };

    const handleInputFocus = (event) => {
        const inputContainer = event.currentTarget.parentElement;
        const placeholder = inputContainer.querySelector('.placeholder');

        if (placeholder) {
            placeholder.classList.add('focused');
        }
    };

    const handleInputBlur = (event) => {
        const inputContainer = event.currentTarget.parentElement;
        const placeholder = inputContainer.querySelector('.placeholder');

        if (placeholder && !event.target.value) {
            placeholder.classList.remove('focused');
        }
    };

    const dropdownAnimationPayments = useSpring({
        maxHeight: expandedPayments ? '100vh' : '0px',
        overflow: 'hidden',
    });
    const dropdownAnimationPasswords = useSpring({
        maxHeight: isPasswordExpanded ? '100vh' : '0px',
        overflow: 'hidden',
    });
    const dropdownAnimationAdress = useSpring({
        maxHeight: isAddressExpanded ? '100vh' : '0px',
        overflow: 'hidden',
    });

    return (
        <div className='account-settings-menu-container' onClick={(e) => e.stopPropagation()}>
            <Link to='/menu' className='go-back-icon'><AiOutlineArrowLeft /></Link>
            <div className='account-settings-inner-menu-container'>
                <h2 className='account-settings-headline'>
                    <p className='account-settings-name'><BsFillGearFill /></p> Settings
                </h2>
                <span className='account-settings-line'></span>

                <div className='account-settings-options-container'>
                    <div className='account-settings-option-container'>
                        <div className='input-container'>
                            <input
                                type='text'
                                value={username}
                                onChange={handleUserNameChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            <div className={`placeholder ${username ? 'focused' : ''}`}>username</div>
                        </div>
                    </div>
                    <div className='account-settings-option-container'>
                        <div className='input-container'>
                            <input
                                type='text'
                                value={email}
                                onChange={handleEmailChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            <div className={`placeholder ${email ? 'focused' : ''}`}>email</div>
                        </div>
                    </div>
                    <div className='account-settings-option-container'>
                        <div className='input-container'>
                            <input
                                type='text'
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                            <div className={`placeholder ${phoneNumber ? 'focused' : ''}`}>phone</div>
                        </div>
                    </div>
                    <div className='account-settings-option-container'>
                        <div onClick={toggleExpandedAddress} className="account-settings-payments-title"><p>Adress</p> < GoTriangleRight className={`arrow-icon ${isAddressExpanded ? 'on' : 'off'}`} /></div>
                        <animated.div className='password-container' style={dropdownAnimationAdress}>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    value={street}
                                    onChange={handleStreetChange}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                                <div className={`placeholder ${street ? 'focused' : ''}`}>street</div>
                            </div>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    value={apartment}
                                    onChange={handleApartmentChange}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                                <div className={`placeholder ${apartment ? 'focused' : ''}`}>apartment</div>
                            </div>
                            <div className='input-container'>
                                <input
                                    type='text'
                                    value={city}
                                    onChange={handleCityChange}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                                <div className={`placeholder ${city ? 'focused' : ''}`}>city</div>
                            </div>
                        </animated.div>
                    </div>
                    <div className='account-settings-option-container'>
                        <div onClick={toggleExpandedPasswords} className="account-settings-payments-title"><p>Password</p> < GoTriangleRight className={`arrow-icon ${isPasswordExpanded ? 'on' : 'off'}`} /></div>
                        <animated.div className='password-container' style={dropdownAnimationPasswords}>
                            <div className='password-toggle'>
                                <div className='input-container'>
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        value={newPassword}
                                        onChange={handleNewPasswordChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                    />
                                    <div className={`placeholder ${newPassword ? 'focused' : ''}`}>newPassword</div>
                                </div>
                                <button onClick={handlePasswordToggle}>{isPasswordVisible ? <AiOutlineEyeInvisible className='account-eye-icon' /> : <AiOutlineEye className='account-eye-icon' />}</button>
                            </div>
                            <div className='input-container'>
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    value={confirmNewPassword}
                                    onChange={handleConfirmNewPasswordChange}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                />
                                <div className={`placeholder ${confirmNewPassword ? 'focused' : ''}`}>confirmNewPassword</div>
                            </div>
                        </animated.div>
                    </div>

                    <div className='account-settings-option-container'>
                        <div onClick={toggleExpandedPayments} className="account-settings-payments-title"><p>Payment methods</p> < GoTriangleRight className={`arrow-icon ${expandedPayments ? 'on' : 'off'}`} /></div>
                        <animated.div className={'account-settings-payments'} style={dropdownAnimationPayments}>
                            <div className={`account-settings-payment-method`} >
                                <p>Google Pay</p><AiOutlinePlus />
                            </div>
                            <div className={`account-settings-payment-method`} >
                                <p>Apple Pay</p><AiOutlinePlus />
                            </div>
                            <div className={`account-settings-payment-method`} >
                                <p>Credit card</p><AiOutlinePlus />
                            </div>
                        </animated.div>

                    </div>
                    <div className='account-settings-option-container hoverAction' onClick={handleNotificationToggle}>
                        <div className='notification-toggle'>
                            <p>Notifications</p>
                            <button className={`toggle-btn`} >
                                <p>ON</p>
                                <div className={`account-settings-button-slider ${isNotificationOn ? 'on' : 'off'}`}></div>
                                <p>OFF</p>
                            </button>
                        </div>
                    </div>
                    <div className='account-settings-option-container hoverAction' onClick={handleLanguageToggle}>
                        <div className='notification-toggle'>
                            <p>Language</p>
                            <button className={`toggle-btn`}>
                                <p>PL</p>
                                <div className={`account-settings-button-slider ${isPL ? 'on' : 'off'}`}></div>
                                <p>ENG</p>
                            </button>
                        </div>
                    </div>
                    <div className='account-settings-option-container'>
                        <p className='account-privacy-policy'><p>Privacy policy</p> <GoLinkExternal className='account-external-link-icon' /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
