import React from 'react';
import '../css/topBanner.css';

function TopBanner() {
    return(
        <section className="top-banner">
            <div className="container">
                <p className="overhead topBanner-overhead">FOR A SMARTER SUPPLY CHAIN</p>
                <h1 className="main-header">Take your business to the next level with Tinvio’s Supplier Platform</h1>
                <button className="getStarted-btn">Get Started Now</button>
                <p className="comment">Yes, it’s free 🎉</p>
            </div>
        </section>
    )
}

export default TopBanner;