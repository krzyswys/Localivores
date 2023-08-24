import React from 'react';
import classes from "./ShopGalleryPage.module.css";
import Grid from './Grid.js';
const ShopGalleryPage = () => {
    const numberOfDivs = 25; // zmieniłem to na całkowitą liczbę divów
    const generateRandomSize = () => {
        const minWidth = 100;
        const maxWidth = 300;
        const minHeight = 100;
        const maxHeight = 300;

        const width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
        const height = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

        return { width: `${width}px`, height: `${height}px` };
    };

    const divs = Array.from({ length: numberOfDivs }).map((_, i) => {
        const size = generateRandomSize();
        return <div key={i} className={classes.grid_item} style={{ ...size, margin: '0px' }}></div>;
    });

    return (
        <div width={100 + "%"} height={100 + 'vh'}>
            <Grid />
        </div>
        // <div className={classes.grid_container} style={{ display: 'flex', flexWrap: 'wrap' }}>
        //     {divs}
        // </div>
    );
};

export default ShopGalleryPage;

