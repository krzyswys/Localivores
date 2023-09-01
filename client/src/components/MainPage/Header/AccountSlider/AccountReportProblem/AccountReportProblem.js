import React, { useState } from 'react';
import './AccountReportProblem.css';
import { AiOutlineArrowLeft, AiOutlineWarning } from 'react-icons/ai';
import { GoTriangleRight } from 'react-icons/go';
import { Link } from 'react-router-dom';


const AccountReportProblem = ({ handleMenuClick }) => {
    const [problemDescription, setproblemDescription] = useState('');
    const topics = ['UI', 'Data', 'Delivery', 'Account', 'Payments'];
    const [selectedTopic, setSelectedTopic] = useState('Topics');
    const [isTopicListOpen, setTopicListOpen] = useState(false);

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

    const handleTopicChange = (topic) => {
        setSelectedTopic(topic);
    };

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
        setTopicListOpen(false);
    };

    const handleTopicListClick = () => {
        setTopicListOpen(!isTopicListOpen);
    };


    return (
        <div className='account-report-menu-container' onClick={(e) => e.stopPropagation()}>
            <div onClick={() => handleMenuClick("main")} className='go-back-icon'><AiOutlineArrowLeft /></div>
            <div className='account-report-inner-menu-container'>
                <h2 className='account-report-headline'>
                    <p className='account-report-name'><AiOutlineWarning /></p> Report <p className='account-report-name'>problem</p> </h2>
                <span className='account-report-line'></span>

                <div className='account-report-options-container'>

                    <div className='select-report-topic-container'>
                        <div className='select-report-topic' onClick={handleTopicListClick}>
                            <p id="selectReportText">{selectedTopic}</p>
                            <GoTriangleRight className={isTopicListOpen ? "triangle-open" : "triangle-closed"} />
                            <ul id="list" className={isTopicListOpen ? "open" : "closed"}>
                                <li className='report-options' onClick={() => handleTopicClick('Topics')}>Topics</li>
                                {topics.map((topic, index) => (
                                    <li key={index} className='report-options' onClick={() => handleTopicChange(topic)}>{topic}</li>
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
