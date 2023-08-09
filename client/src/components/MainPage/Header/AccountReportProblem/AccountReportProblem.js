import React, { useState } from 'react';
import './AccountReportProblem.css';
import { AiOutlineArrowLeft, AiOutlineWarning } from 'react-icons/ai';
import { GoTriangleRight } from 'react-icons/go';
import { Link } from 'react-router-dom';


const AccountReportProblem = () => {
    const [problemDescription, setproblemDescription] = useState('');

    const handleproblemDescriptionChange = (e) => {
        setproblemDescription(e.target.value);
    };
    const handleInputFocus = (event) => {
        const inputContainer = event.currentTarget.parentElement;
        const placeholder = inputContainer.querySelector('.placeholder');

        if (placeholder) {
            placeholder.classList.add('focused');
        }
    };

    const handleInputBlur = (event) => {
        const inputContainer = event.currentTarget.parentElement;
        const placeholder = inputContainer.querySelector('.placeholder');

        if (placeholder && !event.target.value) {
            placeholder.classList.remove('focused');
        }
    };
    const topics = ['UI', 'Data', 'Delivery', 'Account', 'Payments'];
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleTopicChange = (event) => {
        setSelectedTopic(event.target.value);
    };
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCategoryListOpen(false);
    };
    const handleCategoryListClick = () => {
        setCategoryListOpen(!isCategoryListOpen);
    };
    const [isCategoryListOpen, setCategoryListOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Categories');

    return (
        <div className='account-report-menu-container' onClick={(e) => e.stopPropagation()}>
            <Link to='/menu' className='go-back-icon'><AiOutlineArrowLeft /></Link>
            <div className='account-report-inner-menu-container'>
                <h2 className='account-report-headline'>
                    <p className='account-report-name'><AiOutlineWarning /></p> Report <p className='account-report-name'>problem</p> </h2>
                <span className='account-report-line'></span>

                <div className='account-report-options-container'>

                    <div className='select-report-topic-container'>
                        <div className='select-report-topic' onClick={handleCategoryListClick}>
                            <p id="selectReportText">{selectedCategory}</p>
                            <GoTriangleRight className={isCategoryListOpen ? "triangle-open" : "triangle-closed"} />
                            <ul id="list" className={isCategoryListOpen ? "open" : "closed"}>
                                <li className='report-options' onClick={() => handleCategoryClick('all categories')}>all categories</li>
                                {topics.map((category, index) => (
                                    <li key={index} className='report-options' onClick={() => handleCategoryClick(category)}>{category}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='report-input-container'>
                        <input
                            type='text'
                            value={problemDescription}
                            onChange={handleproblemDescriptionChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <div className={`placeholder ${problemDescription ? 'focused' : ''}`}>problemDescription</div>
                    </div>
                    <button className='report-button'>Send</button>

                </div>
            </div>
        </div>
    );
};

export default AccountReportProblem;
