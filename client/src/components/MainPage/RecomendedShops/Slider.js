import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Slider.css';
import { AiFillStar } from "react-icons/ai"
import { BiMap, BiSearchAlt } from "react-icons/bi"

const TRANSITION_DURATION = 500;

const AnimatedSlider = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderContainerRef = useRef(null);
    const startXRef = useRef(0);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleMouseDown = useCallback((event) => {
        setIsDragging(true);
        startXRef.current = event.clientX;
    }, []);

    const handleMouseMove = useCallback((event) => {
        if (isDragging) {
            const deltaX = event.clientX - startXRef.current;
            const sliderContainer = sliderContainerRef.current;
            sliderContainer.style.transition = 'none';
            sliderContainer.style.transform = `translateX(calc(-${currentIndex * 100}% + ${deltaX}px))`;
        }
    }, [currentIndex, isDragging]);

    const handleMouseUp = useCallback((event) => {
        setIsDragging(false);
        const deltaX = startXRef.current - event.clientX;
        if (Math.abs(deltaX) > window.innerWidth * 0.1) {
            const counter = Math.round(deltaX / (window.innerWidth * 0.1))
            if (deltaX > 0) {
                nextItem();
            } else {
                prevItem();
            }
        }
        const sliderContainer = sliderContainerRef.current;
        sliderContainer.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, [currentIndex, nextItem, prevItem]);

    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        sliderContainer.style.transition = `transform ${TRANSITION_DURATION}ms ease-in-out`;
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

        const handleResize = () => {
            sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentIndex]);

    return (
        <div
            className='SliderWrapper'
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                className='SliderContainer'
                ref={sliderContainerRef}
            >
                {items.map((item, index) => (
                    <div className='SliderItem' key={index}>
                        <div className='map-link'><BiMap /></div>
                        <div className='shop-link'><BiSearchAlt /></div>
                        <div className='image-container'>
                            <div className='shop-info-container'>
                                <p className='info-element'>Last order value: 37$</p>
                                <p className='info-element'>Average ETA: 22min</p>
                                <p className='info-element'>Shop review: 4.2 <AiFillStar /> </p>
                                <p className='info-element'>Localization: Jana Pawała II 21/37</p>

                            </div>
                        </div>

                        <div className='last-review-container'>
                            <div className='last-review-text'>"GroceryShop is a fantastic one-stop destination for all your grocery needs! With a wide variety of fresh produce, pantry essentials, and household items, this store offers a delightful shopping experience. The layout is well-organized, making it easy to navigate through the aisles"</div>
                            <div className='last-review-stars'>Adam <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                        </div>



                    </div>
                ))}

            </div>
        </div>
    );
};

export default AnimatedSlider;
