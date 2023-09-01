import React, { useState, useRef, useEffect } from 'react';
import '../Header.css';



const AdressInput = () => {
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
    return (

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


    );
};
export default AdressInput;