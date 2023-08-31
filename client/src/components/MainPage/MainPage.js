import React from 'react';
import './MainPage.css';
import CookiesComponent from '../../UI/CookiesDisclaimer/CookiesComponent.js'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import StartPage from './StartPage';

const MainPage = () => {



    const location = useLocation();
    const isOnHomePage = () => {
        return location.pathname === '/';
    };

    return (
        <div className='body' >
            <CookiesComponent />
            <Header />
            <Outlet></Outlet>
            {isOnHomePage() && <StartPage />}
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
