import React, { useEffect, useMemo } from 'react';
import classes from "./ShopGalleryPage.module.css";
import Grid from './Grid.js';
import { useImageContext } from './ImageContext';
import GallerySlider from './Slider/GallerySlider';

const ShopGalleryPage = () => {
    const generateImageLink = (id, width, height) => `https://picsum.photos/id/${id}/${width}/${height}`;

    const imageLinks = Array(23).fill(null).map((_, index) => {
        let randomId = Math.floor(Math.random() * 50);
        let width = Math.floor(Math.random() * 601) + 400;
        let height = Math.floor(Math.random() * 601) + 400;
        return generateImageLink(randomId, width, height);
    });

    const { selectedImage } = useImageContext();
    useEffect(() => {
        console.log(selectedImage)
    }, [selectedImage]);
    const memoizedImageLinks = useMemo(() => imageLinks, []);

    return (

        <div className={classes.SAP}>
            <Grid imageLinks={memoizedImageLinks} />
            {selectedImage !== null && (
                <div className={classes.slider_container}>
                    <GallerySlider imageLinks={memoizedImageLinks} startIndex={selectedImage} />
                </div>
            )}
        </div>

    );
};

export default ShopGalleryPage;


