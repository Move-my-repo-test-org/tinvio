import React from 'react';
import Slider from './Slider';
import desktopScreen from '../assets/images/desktop.png';
import chicken from '../assets/images/image-logo-bottom-chicken.png';
import joliebean from '../assets/images/image-logo-bottom-joliebean.png';
import bensCookies from '../assets/images/image-logo-bottom-bens-cookies.png';
import simplyWraps from '../assets/images/image-logo-bottom-simply-wraps.png';
import italianClub from '../assets/images/image-logo-bottom-italian-club.png';

function PreviewSection() {
    return (
        <section className="preview">
            <div className="container">
                <img className="desktopScreen-img" src={ desktopScreen } alt="desktop screenshot of the app" />
                <h2 className="section-header">Trusted by 1000+ partners across APAC</h2>
                <ul className="partners-logos-list">
                    <li className="partners-logo"><img className="partners-logo-img" src={ chicken } alt="go chicken logo" /></li>
                    <li className="partners-logo"><img className="partners-logo-img" src={ joliebean } alt="joliebean logo" /></li>
                    <li className="partners-logo"><img className="partners-logo-img" src={ bensCookies } alt="bens cookies logo" /></li>
                    <li className="partners-logo"><img className="partners-logo-img" src={ simplyWraps } alt="simply wraps logo" /></li>
                    <li className="partners-logo"><img className="partners-logo-img" src={ italianClub } alt="italian club logo" /></li>
                </ul>
                <Slider />
            </div>
        </section>
    )
}

export default PreviewSection;