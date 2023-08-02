import React, { useState, useEffect, useRef } from 'react';
import { GoTriangleRight } from "react-icons/go"
import { FaMapMarkerAlt } from "react-icons/fa"
import './Header.css';

const locations = ["Kraków", "Warszawa", "Wrocław", "Gdańsk"]
const categories = ["dairy", "vegetables", "fruits", "meat", "bakery"]

const Header = () => {
    const [isLocationListOpen, setLocationListOpen] = useState(false);
    const [isCategoryListOpen, setCategoryListOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Locations');
    const [selectedCategory, setSelectedCategory] = useState('Categories');
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
    const [scrollValue, setScrollValue] = useState(0);

    const handleScroll = () => {
        const scrollValue = window.scrollY;
        setScrollValue(scrollValue);
    };
    const bottomLeftRadius = 150 - scrollValue * 0.8 + 'px';
    const bottomRightRadius = 150 - scrollValue * 0.8 + 'px';

    const divStyle = {
        borderBottomLeftRadius: bottomLeftRadius,
        borderBottomRightRadius: bottomRightRadius,
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
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
    );
};
export default Header;