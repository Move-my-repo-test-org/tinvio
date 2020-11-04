import React from 'react';
import logo from '../assets/logo/logo-white.png';
import inst from '../assets/icons/inst.png';
import linkedIn from '../assets/icons/linkedIn.png';
import google from '../assets/images/google-play.png';
import appStore from '../assets/images/app-store.png';

function Footer() {
    return (
        <div className="container">
            <a href="./" className="logo footer-logo"><img src={ logo } className="logo-img" alt="logo" /></a>
            <div className="menu-container footer-menu">
                <a href="./" className="footer-menu-item" >Home</a>
                <a href="./supplier" className="footer-menu-item" >Supplier</a>
                <a href="./about" className="footer-menu-item" >About</a>
                <a href="./contact" className="footer-menu-item" >Contact</a>
                <a href="./faq" className="footer-menu-item" >FAQ</a>
                <a href="./legal" className="footer-menu-item" >Legal</a>
            </div>
            <div className="social-links">
                <a href="/" className="instagram-logo"><img src={ inst } className="instagram-logo-img" alt="instagram logo" /></a>
                <a href="/" className="linkedin-logo"><img src={ linkedIn } className="linkedin-logo-img" alt="linkedIn logo" /></a>
            </div>
            <div className="download-links">
                <a href="/" className="googlePlay-logo"><img src={ google } className="googlePlay-logo-img" alt="google play logo" /></a>
                <a href="/" className="appStore-logo"><img src={ appStore } className="appStore-logo-img" alt="app store logo" /></a>
            </div>
            <div className="rights">
                <p className="rights-text">© Tinvio™ 2019. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;