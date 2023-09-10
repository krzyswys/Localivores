import React, { useState, useEffect, useRef, useCallback } from 'react';
import classes from "./ProductsPage.module.css";
import Category from './ProductCategory';
import { getIconByTitle } from '../../../UI/Enums/CategoryIconsEnum';
import categories from '../../../assets/Data/SingleShopData/categories.json'

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].categoryTitle);
    const containerRef = useRef(null);

    const scrollToCategory = (categoryTitle) => {
        const element = document.getElementById(categoryTitle.replace(/ /g, '_'));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveCategory(categoryTitle);
    };

    const handleScroll = useCallback(() => {
        const categoriesInView = categories.filter(category => {
            const element = document.getElementById(category.categoryTitle.replace(/ /g, '_'));
            if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top >= 0 && rect.bottom <= window.innerHeight;
            }
            return false;
        });

        if (categoriesInView.length > 0) {
            const newActiveCategory = categoriesInView[0].categoryTitle;
            if (newActiveCategory.trim() !== "") {
                setActiveCategory(newActiveCategory);
            }
        }
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('mousewheel', handleScroll);
        return () => {
            container.removeEventListener('mousewheel', handleScroll);
        };
    }, [handleScroll]);


    return (
        <div className={classes.SAP}>
            <section className={classes.categories_list_inner_column}>
                <div className={classes.categories_info_block}>
                    <p>Categories</p>
                </div>
                {categories.map((category, index) => (
                    <div
                        className={`${classes.categories_list_block} ${activeCategory === category.categoryTitle ? classes.categories_list_block_active : ''} `}
                        key={index}
                        onClick={() => scrollToCategory(category.categoryTitle)}
                    >
                        {getIconByTitle(category.categoryTitle)}
                        <p>{category.categoryTitle}</p>
                    </div>
                ))}
            </section>

            <section className={classes.main_items_container} ref={containerRef}>
                {categories.map((category, index) => (
                    <div id={category.categoryTitle.replace(/ /g, '_')} key={index} className={classes.Category_holder}>
                        <Category style={{ width: '100%' }} title={category.categoryTitle} categoryIcon={getIconByTitle(category.categoryTitle)} products={category.products} />
                    </div>
                ))}
            </section>
        </div >
    );
};


export default ProductsPage;
