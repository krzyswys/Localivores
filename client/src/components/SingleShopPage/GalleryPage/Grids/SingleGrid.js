import React from 'react';
import classes from "./SingleGrid.module.css";
import { useImageContext } from '../ImageContext';

const SingleGrid = (props) => {
    const imageSrc = props.imageSrc;
    const { handleImageClick } = useImageContext();
    // const number = props.number

    const imageStyle = {
        backgroundImage: `url(${imageSrc})`,
    };

    const handleClick = (event) => {
        event.preventDefault();
        handleImageClick(props.number);
    };

    return (
        <div className={classes.parent} onClick={handleClick} >
            <div className={classes.child} style={imageStyle}>
                {/* {number} */}
            </div>
        </div>



    );
};

export default SingleGrid;
