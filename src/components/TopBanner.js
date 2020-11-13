import React from 'react';
import '../css/topBanner.css';
import { goToAnchor } from 'react-scrollable-anchor';

function TopBanner() {
    return(
        <section className="top-banner">
            <div className="container">
                <p className="overhead topBanner-overhead">FOR A SMARTER SUPPLY CHAIN</p>
                <h1 className="main-header">Take your business to the next level with Tinvio’s Supplier Platform</h1>
                <button className="top-getStarted-btn" onClick={ () => goToAnchor('get-started') }>Get Started Now</button>
                <p className="comment">Yes, it’s free 🎉</p>
            </div>
        </section>
    )
}

export default TopBanner;