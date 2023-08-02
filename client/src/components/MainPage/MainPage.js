import React, { useState, useEffect, useRef } from 'react';
import './MainPage.css';
import { GoTriangleRight } from "react-icons/go"
import { AiOutlineFacebook, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import { FiInstagram } from "react-icons/fi"
import { FaMapMarkerAlt } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import kute from 'kute.js';
import useOnScreen from './useOnScreen';
import Slider from './Slider';
import CookiesComponent from './CookiesComponent.js'

const locations = ["Kraków", "Warszawa", "Wrocław", "Gdańsk"]
const categories = ["dairy", "vegetables", "fruits", "meat", "bakery"]


const MainPage = () => {
    const [isLocationListOpen, setLocationListOpen] = useState(false);
    const [isCategoryListOpen, setCategoryListOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Locations');
    const [selectedCategory, setSelectedCategory] = useState('Categories');
    const [elementRef, isOnScreen] = useOnScreen();
    const [elementRef2, isOnScreen2] = useOnScreen();
    const [elementRef3, isOnScreen3] = useOnScreen();
    const items = ['Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5'];
    const handleLocationListClick = () => {
        setLocationListOpen(!isLocationListOpen);
    };
    const handleCategoryListClick = () => {
        setCategoryListOpen(!isCategoryListOpen);
    };

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
        setLocationListOpen(false);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCategoryListOpen(false);
    };

    useEffect(() => {

        const animation = kute.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path: '#blob2' },
            { repeat: 999, duration: 1000, yoyo: true }
        );
        animation.start();
        const animation2 = kute.fromTo(
            '#blob3',
            { path: '#blob3' },
            { path: '#blob4' },
            { repeat: 999, duration: 1000, yoyo: true }
        );
        animation2.start();
        const animation3 = kute.fromTo(
            '#blob5',
            { path: '#blob5' },
            { path: '#blob6' },
            { repeat: 999, duration: 1000, yoyo: true }
        );
        animation3.start();

    }, []);


    const [scrollValue, setScrollValue] = useState(0);

    const handleScroll = () => {
        const scrollValue = window.scrollY;
        setScrollValue(scrollValue);
    };
    const [address, setAddress] = useState('Your address');
    const [isAddressEditable, setAddressEditable] = useState(true);
    const [isApartmentEditable, setApartmentEditable] = useState(true);
    const [isStreetEditable, setStreetEditable] = useState(true);
    const [isCityEditable, setCityEditable] = useState(true);
    const [apartment, setApartment] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const apartmentInputRef = useRef(null);
    const streetInputRef = useRef(null);
    const cityInputRef = useRef(null);

    const handleApartmentClick = () => {
        setApartmentEditable(true);
        if (apartmentInputRef.current) {
            apartmentInputRef.current.focus();
        }
    };

    const handleStreetClick = () => {
        setStreetEditable(true);
        if (streetInputRef.current) {
            streetInputRef.current.focus();
        }
    };

    const handleCityClick = () => {
        setCityEditable(true);
        if (cityInputRef.current) {
            cityInputRef.current.focus();
        }
    };

    const handleApartmentChange = (event) => {
        setApartment(event.target.value);
        const apartmentValue = event.target.value;
        const apartmentLabel = document.querySelector("#apartmentWrapper .placeholder-text");
        console.log(apartmentValue.trim().length)

        if (apartmentValue.trim().length !== 0) {
            apartmentLabel.classList.add("notempty-input");
        } else {
            apartmentLabel.classList.remove("notempty-input");

        }
    };

    const handleStreetChange = (event) => {
        setStreet(event.target.value);
        const streetValue = event.target.value;
        const streetLabel = document.querySelector("#streetWrapper .placeholder-text");
        console.log(streetValue.trim().length)

        if (streetValue.trim().length !== 0) {
            streetLabel.classList.add("notempty-input");
        } else {
            streetLabel.classList.remove("notempty-input");

        }
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
        const cityValue = event.target.value;
        const cityLabel = document.querySelector("#cityWrapper .placeholder-text");
        console.log(cityValue.trim().length)

        if (cityValue.trim().length !== 0) {
            cityLabel.classList.add("notempty-input");
        } else {
            cityLabel.classList.remove("notempty-input");

        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bottomLeftRadius = 150 - scrollValue * 0.8 + 'px';
    const bottomRightRadius = 150 - scrollValue * 0.8 + 'px';

    const divStyle = {
        borderBottomLeftRadius: bottomLeftRadius,
        borderBottomRightRadius: bottomRightRadius,
    };


    const handleInputSize = (inputRef) => {
        if (inputRef && inputRef.current) {
            const { current } = inputRef;
            current.style.width = 'auto';
            current.style.width = `${current.scrollWidth}px`;
        }
    };

    useEffect(() => {
        handleInputSize(apartmentInputRef);
        handleInputSize(streetInputRef);
        handleInputSize(cityInputRef);
    }, [apartment, street, city]);

    const [activeLanguage, setActiveLanguage] = useState('PL');

    const handleLanguageChange = () => {
        setActiveLanguage(activeLanguage === 'PL' ? 'EN' : 'PL');
    };
    return (
        <div className='body' >
            <CookiesComponent />
            <div className='searchBar-container ' style={divStyle}>
                <header className='header'>
                    <div className='logo'>LOCALIVORES</div>
                    <div className='account'>
                        <button className='login-button'>Log in</button>
                        <button className='register-button'>Register</button>
                    </div>
                </header>
                <h3>Find best quality product in your area</h3>
                <div className='search-bar '>
                    <input
                        type="text"
                        id='inputfield'
                        placeholder={`Search for ${selectedCategory} in ${selectedLocation}`}
                    />
                    <div className='select-category' onClick={handleCategoryListClick}>
                        <p id="selectText">{selectedCategory}</p>
                        <GoTriangleRight className={isCategoryListOpen ? "triangle-open" : "triangle-closed"} />
                        <ul id="list" className={isCategoryListOpen ? "open" : "closed"}>
                            <li className='options' onClick={() => handleCategoryClick('all categories')}>all categories</li>
                            {categories.map((category, index) => (
                                <li key={index} className='options' onClick={() => handleCategoryClick(category)}>{category}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='select-location' onClick={handleLocationListClick}>
                        <p id="selectText">{selectedLocation}</p>
                        <GoTriangleRight className={isLocationListOpen ? "triangle-open" : "triangle-closed"} />
                        <ul id="list" className={isLocationListOpen ? "open" : "closed"}>
                            <li className='options' onClick={() => handleLocationClick('all locations')}>all locations</li>
                            {locations.map((location, index) => (
                                <li key={index} className='options' onClick={() => handleLocationClick(location)}>{location}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='localization-pin-container'><FaMapMarkerAlt /></div>
                </div>
                <div class="address-container">
                    <div class="address-input">
                        <div class="input-wrapper" id='apartmentWrapper'>
                            <input
                                type="text"
                                value={apartment}
                                onChange={handleApartmentChange}
                                ref={apartmentInputRef}
                                id="apartmentInput"
                            />
                            <label class="placeholder-text" for="apartmentInput">Apartment</label>
                        </div>
                        <div class="separator">/</div>
                        <div class="input-wrapper" id='streetWrapper'>
                            <input
                                type="text"
                                value={street}
                                onChange={handleStreetChange}
                                ref={streetInputRef}
                                id="streetInput"
                            />
                            <label class="placeholder-text" for="streetInput">Street</label>
                        </div>
                        <div class="separator">,</div>
                        <div class="input-wrapper" id='cityWrapper'>
                            <input
                                type="text"
                                value={city}
                                onChange={handleCityChange}
                                ref={cityInputRef}
                                id="cityInput"
                            />
                            <label class="placeholder-text" for="cityInput">City</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mapnshops-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0165476869097!2d19.945654483043814!3d50.06833283343086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1ae164baaf%3A0x43265081a4156da2!2zRHdvcnplYyBHxYLDs3dueSBaYWNow7Nk!5e0!3m2!1spl!2spl!4v1690386930990!5m2!1spl!2spl" allowFullScreen="" loading="fast" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                <div className='shop-slider'>
                    <h3>Browse best shops in your area</h3>
                    <Slider items={items} />
                </div>
            </div>
            <div className='spacerr'>
                <div className='wave2'>
                    <p>“It is the long history of humankind that those who learned to collaborate and improvise most effectively have prevailed.” – Charles Darwin
                    </p>
                </div>

            </div>

            <div className='joinus-container' ref={elementRef}>
                <div className={`joinus-element-container ${isOnScreen ? 'showAnim-joinus' : 'hiddenAnim-joinus'}`} ref={elementRef}>

                    <div className='joinus-image-container' >
                        <svg className="visual"
                            viewBox="0 0 300 300"
                            width="300" height="300"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1">
                            <g transform="translate(151.245136210609 150.16336741830096)"><path id="blob1" d="M69.7 -70C86.4 -53 93.2 -26.5 92.7 -0.5C92.1 25.5 84.2 50.9 67.6 68.2C50.9 85.6 25.5 94.8 1.1 93.7C-23.2 92.5 -46.4 81.1 -64.1 63.7C-81.7 46.4 -93.9 23.2 -95.1 -1.2C-96.4 -25.7 -86.7 -51.4 -69 -68.4C-51.4 -85.4 -25.7 -93.7 0.4 -94.1C26.5 -94.5 53 -87 69.7 -70" fill="#ffffff"></path></g>
                            <g transform="translate(150.49650770144768 149.13080832918925)" style={{ visibility: 'hidden' }}><path id='blob2' d="M64 -64.1C80.4 -47.6 89.4 -23.8 89.6 0.1C89.7 24 80.9 48.1 64.5 64.6C48.1 81.1 24 90 -1.2 91.3C-26.5 92.5 -53 86 -69.4 69.5C-85.7 53 -91.8 26.5 -90.4 1.5C-88.9 -23.6 -79.8 -47.1 -63.5 -63.6C-47.1 -80.1 -23.6 -89.6 0.1 -89.7C23.8 -89.8 47.6 -80.6 64 -64.1" fill="#ffffff"></path></g>
                        </svg>
                        <div className='joinus-image image1'></div>
                    </div>
                    <h3 className='joinus-text'>Put your market on display and become available for whole region. Give yoursefl oportunity to pull clients form all around the region</h3>
                    <button className='joinus-button'>Join shop community</button>
                </div>
                <div className={`joinus-element-container ${isOnScreen ? 'showAnim-joinus' : 'hiddenAnim-joinus'}`} ref={elementRef}>
                    <div className='joinus-image-container'>
                        <svg className="visual"
                            viewBox="0 0 300 300"
                            width="300" height="300"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1">
                            <g transform="translate(147.34823174975085 150.75635529535825)"><path id='blob3' d="M70.7 -70.2C88.4 -53 97.2 -26.5 95.5 -1.7C93.8 23.1 81.5 46.2 63.9 63.4C46.2 80.5 23.1 91.8 -0.9 92.7C-25 93.7 -50 84.3 -66.4 67.1C-82.8 50 -90.6 25 -90.4 0.2C-90.1 -24.5 -81.8 -49 -65.4 -66.2C-49 -83.4 -24.5 -93.2 1 -94.2C26.5 -95.2 53 -87.4 70.7 -70.2" fill="#ffffff"></path></g>
                            <g transform="translate(151.9018868676114 151.40270118838168)" style={{ visibility: 'hidden' }}><path id='blob4' d="M65.6 -64.6C83.6 -47.6 95.8 -23.8 95.5 -0.3C95.2 23.2 82.4 46.4 64.4 62.9C46.4 79.4 23.2 89.2 -0.3 89.5C-23.8 89.8 -47.6 80.6 -66.4 64.1C-85.1 47.6 -98.8 23.8 -99.3 -0.5C-99.7 -24.7 -87 -49.5 -68.2 -66.5C-49.5 -83.5 -24.7 -92.7 -0.5 -92.3C23.8 -91.8 47.6 -81.6 65.6 -64.6" fill="#ffffff"></path></g>
                        </svg>
                        <div className='joinus-image image2'></div>
                    </div>
                    <h3 className='joinus-text'>Allow us to help you grow your shop beyond local customers. Find more and enroll in our partnership program </h3>
                    <button className='joinus-button'>Become partner</button>
                </div>
                <div className={`joinus-element-container ${isOnScreen ? 'showAnim-joinus' : 'hiddenAnim-joinus'}`} ref={elementRef}>
                    <div className='joinus-image-container'>
                        <svg className="visual"
                            viewBox="0 0 300 300"
                            width="300" height="300"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1">
                            <g transform="translate(151.56118911345573 149.46926795341113)"><path id='blob5' d="M62.6 -63C79 -46.2 88.7 -23.1 89.7 0.9C90.6 25 82.8 50 66.4 67.1C50 84.3 25 93.7 0.2 93.4C-24.5 93.2 -49 83.4 -65.9 66.2C-82.7 49 -91.8 24.5 -92.8 -1C-93.8 -26.5 -86.7 -53 -69.9 -69.9C-53 -86.7 -26.5 -93.8 -1.7 -92.1C23.1 -90.4 46.2 -79.9 62.6 -63" fill="#ffffff"></path></g>
                            <g transform="translate(150.07589738131094 149.48036450690194)" style={{ visibility: 'hidden' }}><path id='blob6' d="M64.2 -64.7C82.1 -46.4 94.5 -23.2 96.2 1.7C97.8 26.5 88.7 53 70.9 71.4C53 89.7 26.5 99.8 1.4 98.5C-23.8 97.1 -47.6 84.3 -65.6 65.9C-83.6 47.6 -95.8 23.8 -96.5 -0.7C-97.2 -25.2 -86.4 -50.4 -68.4 -68.8C-50.4 -87.1 -25.2 -98.6 -1 -97.5C23.2 -96.5 46.4 -83.1 64.2 -64.7" fill="#ffffff"></path></g>
                        </svg>
                        <div className='joinus-image image3'></div>
                    </div>
                    <h3 className='joinus-text'>Explore new possibilities of side earning by joining our drivers community - become your boss, define own working ours and work area</h3>
                    <button className='joinus-button'>Start driving</button>
                </div>
            </div>
            <div className='spacerr'>
                <div className='wave3'>

                </div>
            </div>
            <div className='aboutus-container' ref={elementRef3}>
                <h3 className={`aboutus-text ${isOnScreen3 ? 'showAnim-aboutus' : 'hiddenAnim-aboutus'}`} ref={elementRef3}><h2>OUR MISSON</h2><p>We are a passionate team of food and grocery enthusiasts dedicated to connecting communities with their favorite local grocery stores and markets. Our platform aims to revolutionize the way you shop for essentials and treats, making it more convenient, efficient, and delightful than ever before.
                    At Localivores, we believe in the power of local businesses and the unique charm they bring to neighborhoods. We understand the value of supporting small businesses and helping them thrive in a fast-paced world. By collaborating with your favorite local grocery shops and markets, we aim to empower these cherished establishments while providing you with a seamless shopping experience right at your fingertips.</p></h3>
                <div className={`aboutus-image-container ${isOnScreen3 ? 'showAnim-aboutus' : 'hiddenAnim-aboutus'}`} ref={elementRef3}></div>

            </div>
            <div className='spacerr'>
                <div className='wave4'>

                </div>
            </div>
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
            <p className='disclaimer'>@Loalivores2023</p>
            <div className='spacerr'>
                <div className='wave5'>

                </div>
            </div>

        </div >
    );
};


export default MainPage;
