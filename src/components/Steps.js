import React from 'react';
import question from '../assets/icons/question.png';
import person from '../assets/icons/person+.png';
import heart from '../assets/icons/heart.png';
import '../css/steps.css';

function Steps() {
    return (
        <section className="steps">
            <div className="container">
                <p className="overhead">ARE YOU READY?</p>
                <h2 className="section-header steps-header">3 Simple Steps to Get Started</h2>
                <div className="three-steps-block">
                    <div className="step-wrapper">
                        <img className="step-img" src={ question } alt="question icon" />
                        <h3 className="section-subtitle steps-subtitle">Get in Touch With Us</h3>
                        <p className="step-text">Fill up the form and we’ll reach out to you</p>
                    </div>
                    <div className="steps-line"></div>
                    <div className="step-wrapper">
                        <img className="step-img" src={ person } alt="person icon" />
                        <h3 className="section-subtitle steps-subtitle">Connect to Your Clients</h3>
                        <p className="step-text second-step-text">They’ll receive a fully guided tutorial on how to order</p>
                    </div>
                    <div className="steps-line"></div>
                    <div className="step-wrapper">
                        <img className="step-img" src={ heart } alt="heart icon" />
                        <h3 className="section-subtitle steps-subtitle">Onboarded In a Heartbeat</h3>
                        <p className="step-text third-text-step">Activated and live within a day</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps;