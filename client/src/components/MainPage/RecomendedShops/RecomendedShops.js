import React from 'react';
import './RecomendedShops.css';
import Slider from './Slider';

const RecomendedShops = () => {

    const items = ['Element 1', 'Element 2', 'Element 3', 'Element 4', 'Element 5'];

    return (
        <div className='mapnshops-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.0165476869097!2d19.945654483043814!3d50.06833283343086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1ae164baaf%3A0x43265081a4156da2!2zRHdvcnplYyBHxYLDs3dueSBaYWNow7Nk!5e0!3m2!1spl!2spl!4v1690386930990!5m2!1spl!2spl" allowFullScreen="" loading="fast" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
            <div className='shop-slider'>
                <h3>Browse best shops in your area</h3>
                <Slider items={items} />
            </div>
        </div>
    );

};
export default RecomendedShops;