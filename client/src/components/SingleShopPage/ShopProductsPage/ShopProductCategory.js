import React, { useState } from 'react';
import classes from "./SingleShopPage.module.css";

const Category = ({ title, items }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={classes.category_container}>
            <p onClick={toggleExpanded} className={classes.category_header}>
                <p>{title}</p>
            </p>
            <div className={classes.items_container} >
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};
export default Category;
