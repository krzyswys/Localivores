import React, { useState, useEffect, useRef } from 'react';
import classes from "./ShopProductsPage.module.css";
import Category from './ShopProductCategory';
import ShopProductItem from './ShopProductItem';
import { TbShoppingCartDiscount } from 'react-icons/tb'
import { LuMilk } from 'react-icons/lu'
import { GiSteak } from 'react-icons/gi'
import { MdWhatshot } from 'react-icons/md'
import { CiApple } from 'react-icons/ci'
import { LiaCarrotSolid } from 'react-icons/lia'

const ShopProductsPage = () => {
    const categories = [
        { title: 'Bestsellers', icon: <MdWhatshot />, items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />,] },
        { title: 'Discounted', icon: <TbShoppingCartDiscount />, items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
        { title: 'Vegetables', icon: <LiaCarrotSolid />, items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
        { title: 'Fruits', icon: <CiApple />, items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
        { title: 'Dairy', icon: <LuMilk />, items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
        { title: 'Meat', icon: <GiSteak />, items: [<ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />, <ShopProductItem />] },
    ];
    const [activeCategory, setActiveCategory] = useState(categories[0].title);
    const containerRef = useRef(null);
    const scrollToCategory = (categoryTitle) => {
        const element = document.getElementById(categoryTitle.replace(/ /g, '_'));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveCategory(categoryTitle);
    };
    const handleScroll = () => {
        const categoriesInView = categories.filter(category => {
            const element = document.getElementById(category.title.replace(/ /g, '_'));
            if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top >= 0 && rect.bottom <= window.innerHeight;
            }
            return false;
        });

        if (categoriesInView.length > 0) {
            setActiveCategory(categoriesInView[0].title);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('mousewheel', handleScroll);

        return () => {
            container.removeEventListener('mousewheel', handleScroll);
        };
    }, []);
    return (
        <div className={classes.SAP}>




            <div className={classes.categories_list_inner_column}>
                <div className={classes.categories_info_block}>
                    <p>Categories</p>
                </div>

                {categories.map((category, index) => (
                    <div
                        className={`${classes.categories_list_block} ${activeCategory === category.title ? classes.categories_list_block_active : ''}`}
                        key={index}
                        onClick={() => scrollToCategory(category.title)}
                    >
                        {category.icon}
                        <p>{category.title}</p>
                    </div>
                ))}

            </div>

            <div className={classes.main_items_container} ref={containerRef}>
                {categories.map((category, index) => (
                    <div id={category.title.replace(/ /g, '_')} key={index} className={classes.Category_holder}>
                        <Category style={{ width: '100%' }} title={category.title} categoryIcon={category.icon} items={category.items} />
                    </div>
                ))}
            </div>

        </div >
    );
};


export default ShopProductsPage;
