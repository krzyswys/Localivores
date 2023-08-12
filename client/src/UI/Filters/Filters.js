import React, { useState, useEffect } from 'react';
import classes from './Filters.module.css';
import Button from '../../UI/Button/Button';

const Filters = ({ products, setFilteredProducts }) => {
    const [filter, setFilter] = useState({ 
        product_name: '', 
        shop_name: '', 
        shop_address: '', 
        shop_rate: 0, 
        price: { min: 0, max: 0 } 
    });
    const [isFilterActive, setIsFilterActive] = useState(false);

    const activeFilterHandler = () => {
        setIsFilterActive(prevActive => !prevActive);
    };

    useEffect(() => {
        const minPrice = Math.min(...products.map(p => Number(p.product_price)));
        const maxPrice = Math.max(...products.map(p => Number(p.product_price)));
        setFilter(filter => ({ ...filter, price: { min: minPrice, max: maxPrice } }));
    }, [products]);

    const filterResults = () => {
        const results = products.filter(product => 
            product.product_name.includes(filter.product_name) &&
            product.shop_name.includes(filter.shop_name) &&
            product.shop_address.includes(filter.shop_address) &&
            product.shop_rate >= filter.shop_rate &&
            Number(product.product_price) >= filter.price.min &&
            Number(product.product_price) <= filter.price.max
        );
        setFilteredProducts(results);
    };

    useEffect(() => {
        const identifier = setTimeout(() => {  
            filterResults();
        }, 500);
        return () => {clearTimeout(identifier);}
    }, [filter]);

    const filterClasses = `${classes.filters} ${isFilterActive ? classes.active : ''}`
    const filterMess = !isFilterActive ? `Show filters` : `Hide filters`;

    return (
        <div className={filterClasses}>
            <Button  onClick={activeFilterHandler}>{filterMess}</Button>
            <div className={classes.row}>
                <div className={classes.column}>
                    <input type="text" placeholder="Product Name" onChange={(e) => setFilter({ ...filter, product_name: e.target.value })} />
                    <input type="text" placeholder="Shop Name" onChange={(e) => setFilter({ ...filter, shop_name: e.target.value })} />
                </div>
                <div className={classes.column}>
                    <input type="text" placeholder="Shop Address" onChange={(e) => setFilter({ ...filter, shop_address: e.target.value })} />
                    <input type="number" placeholder="Shop Rate (Min)" onChange={(e) => setFilter({ ...filter, shop_rate: e.target.value })} />
                </div>
            </div>
            <div className={classes.row}>
                <label htmlFor="Price_From">Price From</label>
                <input id="Price_From" type="number" placeholder="Price From" value={filter.price.min} onChange={(e) => setFilter({ ...filter, price: { ...filter.price, min: e.target.value } })} />
                <label htmlFor="Price_To">To</label>
                <input id="Price_To" type="number" placeholder="Price To" value={filter.price.max} onChange={(e) => setFilter({ ...filter, price: { ...filter.price, max: e.target.value } })} />
            </div> 
        </div>
    );
};

export default Filters;
