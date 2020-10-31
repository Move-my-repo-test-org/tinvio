import React from 'react';
import CountriesList from './CountriesList';
import Form from './Form';
import rightArrow from '../assets/icons/right-arrow-handwritten.png';
import leftArrow from '../assets/icons/left-arrow-handwritten.png';



function GetStarted() {
    return (
        <section className="get-stated">
            <div className="container">
                <div className="getStarted-description">
                    <div className="getStarted-header-block">
                        <p className="overhead getStarted-overhead">let’s do this</p>
                        <h2 className="section-header steps-header">Fill up the form and we’ll get in touch within a few hours</h2>
                    </div>
                    <div className="meet-us">
                        <p className="meet-us-text handwritten-text">Or meet us in</p>
                        <img className="meet-us-arrow" src={ rightArrow } alt="right handwritten arrow" />
                        <CountriesList />
                    </div>
                </div>
                <div className="getStarted-form-block">
                    <p className="form-text handwritten-text">Or meet us in</p>
                    <img className="form-arrow" src={ leftArrow } alt="left handwritten arrow" />
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default GetStarted;