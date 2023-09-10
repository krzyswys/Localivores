import React from 'react';
import classes from "./ProductsPage.module.css";
import ShopProductItem from './ShopProductItem/ShopProductItem';
const Category = ({ title, categoryIcon, products }) => {
    return (
        <div className={classes.category_container}>
            <h2>
                <p>{title}&nbsp;{categoryIcon}</p>
            </h2>
            <div className={classes.items_container} >
                {products.map((product, index) => (
                    <React.Fragment key={index}>
                        <ShopProductItem product={product} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
export default Category;
