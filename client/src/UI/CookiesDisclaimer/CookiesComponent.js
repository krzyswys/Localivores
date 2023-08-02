import React from 'react';
import { useCookies } from 'react-cookie';
import './CookiesComponent.css'
import { BiSolidCookie } from 'react-icons/bi'

const CookiesComponent = () => {
    const [cookies, setCookie] = useCookies(['cookieConsent']);

    const handleCookieConsent = () => {
        setCookie('cookieConsent', true, { path: '/', maxAge: 2592000 }); // 2592000 seconds = 30 days
    };

    const handleCookieDismiss = () => {
        setCookie('cookieConsent', false, { path: '/', maxAge: 2592000 });
    };

    if (cookies.cookieConsent === undefined) {
        return (
            <div className="cookies-overlay">
                <div className="cookies-container">
                    <p> <BiSolidCookie />This website uses cookies to improve your experience.<p className='read-more'>Read more here</p></p>
                    <div className='button container'>
                        <button onClick={handleCookieConsent}>I agree</button>
                        <button onClick={handleCookieDismiss}>Dismiss non essential</button>
                    </div>

                </div>
            </div>
        );
    }

    return null;
};

export default CookiesComponent;
