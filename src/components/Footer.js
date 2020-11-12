import React from 'react';
import logo from '../assets/logo/logo-white.png';
import inst from '../assets/icons/inst.png';
import linkedIn from '../assets/icons/linkedIn.png';
import google from '../assets/images/google-play.png';
import appStore from '../assets/images/app-store.png';
import '../css/footer.css';

function Footer() {
    return (
        <div className="container">
            <div className="footer-first-line">
                <div className="footer-nav">
                    <a href="./" className="logo footer-logo"><img src={ logo } className="logo-img" alt="logo" /></a>
                    <div className="footer-vertical-line"></div>
                    <div className="menu-container footer-menu">
                        <a href="./" className="footer-menu-item" >Home</a>
                        <a href="./supplier" className="footer-menu-item" >Supplier</a>
                        <a href="./about" className="footer-menu-item" >About</a>
                        <a href="./contact" className="footer-menu-item" >Contact</a>
                        <a href="./faq" className="footer-menu-item" >FAQ</a>
                        <a href="./legal" className="footer-menu-item" >Legal</a>
                    </div>
                    
                </div>
                <div className="footer-vertical-line"></div>
                <div className="social-links">
                    <a href="/" className="footer-social-logo"><img src={ inst } className="footer-social-logo-img" alt="instagram logo" /></a>
                    <a href="/" className="footer-social-logo"><img src={ linkedIn } className="footer-social-logo-img" alt="linkedIn logo" /></a>
                </div>
                <div className="download-links">
                    <a href="/" className="footer-download-logo"><img src={ google } className="footer-download-logo-img" alt="google play logo" /></a>
                    <a href="/" className="footer-download-logo"><img src={ appStore } className="footer-download-logo-img" alt="app store logo" /></a>
                </div>
            </div>
            <div className="rights">
                <p className="rights-text">© Tinvio™ 2019. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;