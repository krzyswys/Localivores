

import React,{useState,useEffect} from 'react';
import ProductCard from './ProductCard';
import classes from './AfterSearch.module.css';
import Button from '../../UI/Button/Button';

const dummyData = [
    {
        product_id: "g1",
        product_name: "Apple",
        product_description: "Tasty apple",
        product_price: "2.99",
        product_weight: "150g",
        production_date: "2023-05-10",
        product_discount: "10%",
        product_origin: "Poland",
        product_expiration_date: "2023-08-10",
        shop_name: "Local Farmer",
        shop_rate:'4.5',
        picture:"https://picsum.photos/300",
        shop_address: "Green Street 12, Warsaw",
        shop_opening_hours: "8:00-20:00",
        shop_longitude: "21.0118",
        shop_latitude: "52.2297",
    },
    {
        product_id: "g2",
        product_name:"Apple",
        product_description: "Super Apple",
        product_price: "3.99",
        product_weight: "150g",
        production_date: "2023-05-12",
        product_discount: "15%",
        product_origin: "Ecuador",
        product_expiration_date: "2023-08-15",
        shop_name: "Health Mart",
        shop_rate:'3.5',
        picture:"https://picsum.photos/300",
        shop_address: "Yellow Avenue 34, Warsaw",
        shop_opening_hours: "9:00-19:00",
        shop_longitude: "21.0133",
        shop_latitude: "52.2301",
    },
    {
        product_id: "g3",
        product_name: "Apple",
        product_description: "Fresh Apple",
        product_price: "3.59",
        product_weight: "150g",
        production_date: "2023-06-01",
        product_discount: "5%",
        product_origin: "Spain",
        shop_rate:'5',
        product_expiration_date: "2023-08-30",
        shop_name: "GreenGrocer",
        picture:"https://picsum.photos/300",
        shop_address: "Red Street 6, Warsaw",
        shop_opening_hours: "8:30-21:00",
        shop_longitude: "21.0144",
        shop_latitude: "52.2321",
    },{
        product_id: "g4",
        product_name: "Applee",
        product_description: "Fresh Apple",
        product_price: "3.59",
        product_weight: "150g",
        production_date: "2023-06-01",
        product_discount: "5%",
        product_origin: "Spain",
        shop_rate:'5',
        product_expiration_date: "2023-08-30",
        shop_name: "GreenGrocer",
        picture:"https://picsum.photos/300",
        shop_address: "Red Street 6, Warsaw",
        shop_opening_hours: "8:30-21:00",
        shop_longitude: "21.0144",
        shop_latitude: "52.2321",
    },{
        product_id: "g5",
        product_name: "Applee",
        product_description: "Fresh Apple",
        product_price: "3.59",
        product_weight: "150g",
        production_date: "2023-06-01",
        product_discount: "5%",
        product_origin: "Spain",
        shop_rate:'5',
        product_expiration_date: "2023-08-30",
        shop_name: "GreenGrocer",
        picture:"https://picsum.photos/300",
        shop_address: "Red Street 6, Warsaw",
        shop_opening_hours: "8:30-21:00",
        shop_longitude: "21.0144",
        shop_latitude: "52.2321",
    },
];

const AfterSearch = () => {
    const [products, setProducts] = useState(dummyData);
    const [filteredProducts, setFilteredProducts] = useState(dummyData);
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
    }

    useEffect(() => {
        // znajdujemy najniższą i najwyższą cenę wśród produktów
        const minPrice = Math.min(...products.map(p => Number(p.product_price)));
        const maxPrice = Math.max(...products.map(p => Number(p.product_price)));
        // ustawiamy te wartości jako domyślne wartości filtrów ceny
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
        return ()=>{clearTimeout(identifier);}
        
    }, [filter]);
    //if isFilterActive is true, then filterClasses = classes.filters + ' ' + classes.active else just classes.filters
    const filterClasses = `${classes.filters} ${isFilterActive ? classes.active : ''}`
    const filterMess = !isFilterActive ? `Show filters` : `Hide filters`;
    return (
   <React.Fragment>
        <div className={classes.count}>Found {filteredProducts.length} results</div>
    <div className={classes.productList}>
    <div className={filterClasses}>
        
        <Button  onClick={activeFilterHandler} className={classes.row}>{filterMess}</Button>
        
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
        <label  htmlFor="Price_To">To</label>
        <input id="Price_To" type="number" placeholder="Price To" value={filter.price.max} onChange={(e) => setFilter({ ...filter, price: { ...filter.price, max: e.target.value } })} />
        </div> 
    </div>
    <div className={classes.results}>
    
        {filteredProducts.map(product => (
            <ProductCard key={product.product_id} product={product} />
        ))}
    </div>
</div>
</React.Fragment>

    );
};

export default AfterSearch;
