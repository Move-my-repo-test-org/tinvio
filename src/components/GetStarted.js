import React from 'react';
import CountriesList from './CountriesList';
import Form from './Form';
import rightArrow from '../assets/icons/right-arrow-handwritten.png';
import leftArrow from '../assets/icons/left-arrow-handwritten.png';
import '../css/getStarted.css';



function GetStarted() {
    return (
        <section className="get-stated">
            <div className="container">
                <div className="getStarted-header-block" id={'get-started'}>
                    <p className="overhead getStarted-overhead">let’s do this</p>
                    <h2 className="section-header getStarted-header">Fill up the form and we’ll get in touch within<br /> a few hours</h2>
                </div>
                <div className="getStarted-form-block">
                    <img className="form-arrow" src={ leftArrow } alt="left handwritten arrow" />
                    <p className="form-text handwritten-text">Let’s get to know each other</p>
                    <Form />
                </div>
                <div className="meet-us">
                    <img className="meet-us-arrow" src={ rightArrow } alt="right handwritten arrow" />
                    <p className="meet-us-text handwritten-text">Or meet us in</p>
                    <CountriesList />
                </div>
            </div>
        </section>
    )
}

export default GetStarted;