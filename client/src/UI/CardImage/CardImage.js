import React from 'react';
import classes from './CardImage.module.css';

const CardImage = (props) => {
    return (
        <div className={classes['img-container']}>
            <img className={classes.cardImage} src={props.src} alt={props.alt} />
        </div>
    );
}

export default CardImage;
