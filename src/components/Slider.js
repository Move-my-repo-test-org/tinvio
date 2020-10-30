import React from 'react';
import arrow from '../assets/icons/arrow.png';
import sliderImg from '../assets/images/slider-image-orders.png';

function Slider() {
    return (
        <div className="slider">
            <div className="slider-text-section">
                <h2 className="section-header slider-header">All your orders in one place</h2>
                <p className="slider-text">Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform</p>
                <div className="slider-controls">
                    <div className="left-arrow-btn">
                        <img className="left-arrow" src={ arrow } alt="left arrow" />
                    </div>
                    <div className="pagination">
                        <span className="first-dot">.</span>
                        <span className="second-dot">.</span>
                        <span className="third-dot">.</span>
                    </div>
                    <div className="right-arrow-btn">
                        <img className="right-arrow active" src={ arrow } alt="right arrow" />
                    </div>
                </div>
            </div>
            <div className="slider-img-section">
                <img className="slider-img active" src={ sliderImg } alt="screenshot of orders page" />
            </div>
        </div>
    )
}

export default Slider;