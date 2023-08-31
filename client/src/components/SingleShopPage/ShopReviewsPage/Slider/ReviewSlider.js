import React, { useState, useEffect, useRef, useCallback } from 'react';
import classes from './ReviewSlider.module.css';
import { IoMdClose } from 'react-icons/io'

const TRANSITION_DURATION = 500;

const ReviewSlider = ({ imageLinks, index, onReviewClick }) => {
    const items = imageLinks;
    // const index = props.index;

    const [currentIndex, setCurrentIndex] = useState(index);

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
    const handleExit = () => {
        onReviewClick(null);
    };

    return (
        <div
            className={classes.SliderWrapper}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <IoMdClose className={classes.close_icon} onClick={handleExit} />

            <div
                className={classes.SliderContainer}
                ref={sliderContainerRef}
            >
                {items.map((item, index) => (
                    <div className={classes.SliderItem} key={index}>
                        <div
                            className={classes.SliderPhoto}
                            style={{ backgroundImage: `url(${item})` }}
                        >
                        </div>

                    </div>

                ))}


            </div>
            <div className={classes.NavigationDots}>
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`${classes.Dot} ${index === currentIndex ? classes.ActiveDot : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSlider;
