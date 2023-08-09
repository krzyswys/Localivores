import React from 'react';
import './Footer.css';
import { AiOutlineFacebook, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import { FiInstagram } from "react-icons/fi"
import { IoLogoWhatsapp } from "react-icons/io"
import useOnScreen from '../../../utility/useOnScreen';


const Footer = () => {
    const [elementRef2, isOnScreen2] = useOnScreen();

    return (
        <div className='footer-container' ref={elementRef2}>
            <div className={`footer-section ${isOnScreen2 ? 'showAnim-footer' : 'hiddenAnim-footer'}`} ref={elementRef2}>
                <h3>Partnership</h3>
                <p className='footer-left'>Carrers</p>
                <p className='footer-right'>Drivers</p>
                <p className='footer-left'>Shop collaboration</p>
                <p className='footer-right'>Advertisements</p>
            </div>
            <div className={`footer-section ${isOnScreen2 ? 'showAnim-footer' : 'hiddenAnim-footer'}`} ref={elementRef2}>
                <h3>Media</h3>
                <div className='media-icons-container'>
                    <FiInstagram className='footer-icon-left' />
                    <AiOutlineFacebook className='footer-icon-right' />
                    <AiFillTwitterCircle className='footer-icon-left' />
                    <AiFillYoutube className='footer-icon-right' />
                    <IoLogoWhatsapp className='footer-icon-left' />

                </div>

            </div>
            <div className={`footer-section ${isOnScreen2 ? 'showAnim-footer' : 'hiddenAnim-footer'}`} ref={elementRef2}>
                <h3 >Find more</h3>
                <p className='footer-left'>About us</p>
                <p className='footer-right'>FAQ</p>
                <p className='footer-left'>Contact us</p>
            </div>
            <div className={`footer-section ${isOnScreen2 ? 'showAnim-footer' : 'hiddenAnim-footer'}`} ref={elementRef2}>
                <p className='footer-left'>Cookies policy</p>
                <p className='footer-right'>Privacy policy</p>
                <p className='footer-left'>Terms & conditions</p>
                <p className='footer-right'>Compliance</p>
                <p className='footer-left'>Security</p>
            </div>
        </div>

    );
};
export default Footer;