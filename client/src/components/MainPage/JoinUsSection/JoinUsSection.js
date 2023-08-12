import React, { useEffect } from 'react';
import './JoinUsSection.css';
import kute from 'kute.js';
import useOnScreen from '../../../utility/useOnScreen';


const JoinUsSection = () => {
    const [elementRef, isOnScreen] = useOnScreen();

    useEffect(() => {

        const animation = kute.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path: '#blob2' },
            { repeat: 999, duration: 1000, yoyo: true }
        );
        animation.start();
        const animation2 = kute.fromTo(
            '#blob3',
            { path: '#blob3' },
            { path: '#blob4' },
            { repeat: 999, duration: 1000, yoyo: true }
        );
        animation2.start();
        const animation3 = kute.fromTo(
            '#blob5',
            { path: '#blob5' },
            { path: '#blob6' },
            { repeat: 999, duration: 1000, yoyo: true }
        );
        animation3.start();

    }, []);
    return (
        <div className='joinus-container' ref={elementRef}>
            <div className={`joinus-element-container ${isOnScreen ? 'showAnim-joinus' : 'hiddenAnim-joinus'}`} ref={elementRef}>

                <div className='joinus-image-container' >
                    <svg className="visual"
                        viewBox="0 0 300 300"
                        width="300" height="300"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1">
                        <g transform="translate(151.245136210609 150.16336741830096)"><path id="blob1" d="M69.7 -70C86.4 -53 93.2 -26.5 92.7 -0.5C92.1 25.5 84.2 50.9 67.6 68.2C50.9 85.6 25.5 94.8 1.1 93.7C-23.2 92.5 -46.4 81.1 -64.1 63.7C-81.7 46.4 -93.9 23.2 -95.1 -1.2C-96.4 -25.7 -86.7 -51.4 -69 -68.4C-51.4 -85.4 -25.7 -93.7 0.4 -94.1C26.5 -94.5 53 -87 69.7 -70" fill="#ffffff"></path></g>
                        <g transform="translate(150.49650770144768 149.13080832918925)" style={{ visibility: 'hidden' }}><path id='blob2' d="M64 -64.1C80.4 -47.6 89.4 -23.8 89.6 0.1C89.7 24 80.9 48.1 64.5 64.6C48.1 81.1 24 90 -1.2 91.3C-26.5 92.5 -53 86 -69.4 69.5C-85.7 53 -91.8 26.5 -90.4 1.5C-88.9 -23.6 -79.8 -47.1 -63.5 -63.6C-47.1 -80.1 -23.6 -89.6 0.1 -89.7C23.8 -89.8 47.6 -80.6 64 -64.1" fill="#ffffff"></path></g>
                    </svg>
                    <div className='joinus-image image1'></div>
                </div>
                <h3 className='joinus-text'>Put your market on display and become available for whole region. Give yoursefl oportunity to pull clients form all around the region</h3>
                <button className='joinus-button'>Join shop community</button>
            </div>
            <div className={`joinus-element-container ${isOnScreen ? 'showAnim-joinus' : 'hiddenAnim-joinus'}`} ref={elementRef}>
                <div className='joinus-image-container'>
                    <svg className="visual"
                        viewBox="0 0 300 300"
                        width="300" height="300"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1">
                        <g transform="translate(147.34823174975085 150.75635529535825)"><path id='blob3' d="M70.7 -70.2C88.4 -53 97.2 -26.5 95.5 -1.7C93.8 23.1 81.5 46.2 63.9 63.4C46.2 80.5 23.1 91.8 -0.9 92.7C-25 93.7 -50 84.3 -66.4 67.1C-82.8 50 -90.6 25 -90.4 0.2C-90.1 -24.5 -81.8 -49 -65.4 -66.2C-49 -83.4 -24.5 -93.2 1 -94.2C26.5 -95.2 53 -87.4 70.7 -70.2" fill="#ffffff"></path></g>
                        <g transform="translate(151.9018868676114 151.40270118838168)" style={{ visibility: 'hidden' }}><path id='blob4' d="M65.6 -64.6C83.6 -47.6 95.8 -23.8 95.5 -0.3C95.2 23.2 82.4 46.4 64.4 62.9C46.4 79.4 23.2 89.2 -0.3 89.5C-23.8 89.8 -47.6 80.6 -66.4 64.1C-85.1 47.6 -98.8 23.8 -99.3 -0.5C-99.7 -24.7 -87 -49.5 -68.2 -66.5C-49.5 -83.5 -24.7 -92.7 -0.5 -92.3C23.8 -91.8 47.6 -81.6 65.6 -64.6" fill="#ffffff"></path></g>
                    </svg>
                    <div className='joinus-image image2'></div>
                </div>
                <h3 className='joinus-text'>Allow us to help you grow your shop beyond local customers. Find more and enroll in our partnership program </h3>
                <button className='joinus-button'>Become partner</button>
            </div>
            <div className={`joinus-element-container ${isOnScreen ? 'showAnim-joinus' : 'hiddenAnim-joinus'}`} ref={elementRef}>
                <div className='joinus-image-container'>
                    <svg className="visual"
                        viewBox="0 0 300 300"
                        width="300" height="300"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1">
                        <g transform="translate(151.56118911345573 149.46926795341113)"><path id='blob5' d="M62.6 -63C79 -46.2 88.7 -23.1 89.7 0.9C90.6 25 82.8 50 66.4 67.1C50 84.3 25 93.7 0.2 93.4C-24.5 93.2 -49 83.4 -65.9 66.2C-82.7 49 -91.8 24.5 -92.8 -1C-93.8 -26.5 -86.7 -53 -69.9 -69.9C-53 -86.7 -26.5 -93.8 -1.7 -92.1C23.1 -90.4 46.2 -79.9 62.6 -63" fill="#ffffff"></path></g>
                        <g transform="translate(150.07589738131094 149.48036450690194)" style={{ visibility: 'hidden' }}><path id='blob6' d="M64.2 -64.7C82.1 -46.4 94.5 -23.2 96.2 1.7C97.8 26.5 88.7 53 70.9 71.4C53 89.7 26.5 99.8 1.4 98.5C-23.8 97.1 -47.6 84.3 -65.6 65.9C-83.6 47.6 -95.8 23.8 -96.5 -0.7C-97.2 -25.2 -86.4 -50.4 -68.4 -68.8C-50.4 -87.1 -25.2 -98.6 -1 -97.5C23.2 -96.5 46.4 -83.1 64.2 -64.7" fill="#ffffff"></path></g>
                    </svg>
                    <div className='joinus-image image3'></div>
                </div>
                <h3 className='joinus-text'>Explore new possibilities of side earning by joining our drivers community - become your boss, define own working ours and work area</h3>
                <button className='joinus-button'>Start driving</button>
            </div>
        </div>
    );
};
export default JoinUsSection;