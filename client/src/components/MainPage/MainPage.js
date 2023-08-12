import React, { useState, useEffect } from 'react';
import './MainPage.css';
import CookiesComponent from '../../UI/CookiesDisclaimer/CookiesComponent.js'
import Header from './Header/Header';
import RecomendedShops from './RecomendedShops/RecomendedShops';
import useOnScreen from '../../utility/useOnScreen';
import JoinUsSection from './JoinUsSection/JoinUsSection';
import Footer from './Footer/Footer';


const MainPage = () => {
    const [elementRef3, isOnScreen3] = useOnScreen();

    const handleScroll = () => {
        const scrollValue = window.scrollY;
        setScrollValue(scrollValue);
    };
    const [scrollValue, setScrollValue] = useState(0);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (
        <div className='body' >
            <CookiesComponent />
            <Header />
            <RecomendedShops />
            <div className='spacerr'>
                <div className='wave2'>
                    <p>“It is the long history of humankind that those who learned to collaborate and improvise most effectively have prevailed.” – Charles Darwin
                    </p>
                </div>
            </div>
            <JoinUsSection />

            <div className='spacerr'>
                <div className='wave3'>

                </div>
            </div>
            <div className='aboutus-container' ref={elementRef3}>
                <h3 className={`aboutus-text ${isOnScreen3 ? 'showAnim-aboutus' : 'hiddenAnim-aboutus'}`} ref={elementRef3}><h2>OUR MISSON</h2><p>We are a passionate team of food and grocery enthusiasts dedicated to connecting communities with their favorite local grocery stores and markets. Our platform aims to revolutionize the way you shop for essentials and treats, making it more convenient, efficient, and delightful than ever before.
                    At Localivores, we believe in the power of local businesses and the unique charm they bring to neighborhoods. We understand the value of supporting small businesses and helping them thrive in a fast-paced world. By collaborating with your favorite local grocery shops and markets, we aim to empower these cherished establishments while providing you with a seamless shopping experience right at your fingertips.</p></h3>
                <div className={`aboutus-image-container ${isOnScreen3 ? 'showAnim-aboutus' : 'hiddenAnim-aboutus'}`} ref={elementRef3}></div>

            </div>
            <div className='spacerr'>
                <div className='wave4'>

                </div>
            </div>
            <Footer />
            <p className='disclaimer'>@Loalivores2023</p>
            <div className='spacerr'>
                <div className='wave5'>

                </div>
            </div>

        </div >
    );
};


export default MainPage;
