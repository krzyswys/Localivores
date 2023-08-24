import React from 'react';
import classes from "./SingleShopPage.module.css";
import Category from './ShopProductCategory';
import ShopProductItem from './ShopProductItem';

const ShopProductsPage = () => {
    const categories = [
        { title: 'Bestsellers', items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />,] },
        { title: 'Discounted', items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
        { title: 'Vegetables', items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
        { title: 'Fruits', items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
        { title: 'Dairy', items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
        { title: 'Meat', items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
    ];
    return (
        <div className={classes.SAP}>
            {categories.map((category, index) => (
                <Category style={{ width: '100%' }} key={index} title={category.title} items={category.items} />
            ))}
        </div >
    );
};


export default ShopProductsPage;
