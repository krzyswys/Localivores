import React, { useState } from 'react';
import '../Header.css';

import { GoTriangleRight } from "react-icons/go"
import { FaMapMarkerAlt } from "react-icons/fa"

const SearchBar = () => {
    const locations = ["Kraków", "Warszawa", "Wrocław", "Gdańsk"]
    const categories = ["dairy", "vegetables", "fruits", "meat", "bakery"]
    const [isLocationListOpen, setLocationListOpen] = useState(false);
    const [isCategoryListOpen, setCategoryListOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Locations');
    const [selectedCategory, setSelectedCategory] = useState('Categories');
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
    return (

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


    );
};
export default SearchBar;