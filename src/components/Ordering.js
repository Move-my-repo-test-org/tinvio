import React from 'react';
import orderingStep1 from '../assets/images/ordering-step1.png';
import orderingStep2 from '../assets/images/ordering-step2.png';
import orderingStep3 from '../assets/images/ordering-step3.png';
import arrow from '../assets/icons/right-arrow.png';
import check from '../assets/icons/check.png';
import '../css/ordering.css';

function Ordering() {
    return (
        <section className="ordering">
            <div className="container">
                <div className="ordering-text-block">
                    <h2 className="section-header ordering-header">Seamless Ordering Experience</h2>
                    <p className="section-text ordering-text">Increase your sales by 30% with a better checkout experience. Your customers can place orders easily with a few taps on the item list</p>
                </div>
                <div className="ordering-imgs-block">
                    <div className="ordering-img-wrapper">
                        <img className="ordering-img" src={ orderingStep1 } alt="screenshot of ordering step 1" />
                        <div className="ordering-img-text-wrapper">
                            <p className="ordering-img-text">Select Items</p>
                            <img className="ordering-text-icon" src={ arrow } alt="left arrow" />
                        </div>
                    </div>
                    <div className="ordering-img-wrapper">
                        <img className="ordering-img" src={ orderingStep2 } alt="screenshot of ordering step 2" />
                        <div className="ordering-img-text-wrapper">
                            <p className="ordering-img-text">Review Order</p>
                            <img className="ordering-text-icon" src={ arrow } alt="left arrow" />
                        </div>
                    </div>
                    <div className="ordering-img-wrapper">
                        <img className="ordering-img" src={ orderingStep3 } alt="screenshot of ordering step 3" />
                        <div className="ordering-img-text-wrapper">
                            <p className="ordering-img-text">Send Order</p>
                            <img className="ordering-text-icon" src={ check } alt="left arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ordering;