import React, {  useMemo } from 'react';
import classes from "./ShopGalleryPage.module.css";
import Grid from './Grid.js';
import { useImageContext } from './ImageContext';
import Slider from '../../../UI/Slider/Slider';

const GalleryPage = () => {
    const generateImageLink = (id, width, height) => `https://picsum.photos/id/${id}/${width}/${height}`;

    const imageLinks = Array(23).fill(null).map((_, index) => {
        let randomId = Math.floor(Math.random() * 50);
        let width = Math.floor(Math.random() * 601) + 400;
        let height = Math.floor(Math.random() * 601) + 400;
        return generateImageLink(randomId, width, height);
    });

    const { selectedImage,handleImageClick } = useImageContext();

    const memoizedImageLinks = useMemo(() => imageLinks, []);

    return (

        <div className={classes.SAP}>
            <Grid imageLinks={memoizedImageLinks} />
            {selectedImage !== null && (
                <div className={classes.slider_container}>
                    <Slider imageLinks={memoizedImageLinks} startIndex={selectedImage} onExit={handleImageClick} />
                </div>
            )}
        </div>

    );
};

export default GalleryPage;


