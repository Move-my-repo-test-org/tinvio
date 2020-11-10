import React, { useEffect } from 'react';
import logo from '../assets/logo/logo-color.png';
import burger from '../assets/icons/burger.png';
import '../css/header.css';

function Header() {

    const [deviceType, setDeviceType] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState("Home");
    const defineDeviceType = () => {
        if (window.innerWidth >= 768) {
            setDeviceType('Desktop');
        } else {
            setDeviceType('Mobile');
        }
    }

    useEffect(() => {
        defineDeviceType();
    }, [deviceType]);

    window.addEventListener("resize", defineDeviceType);  

    const makeActive = (e) => {
        e.preventDefault();
        setCurrentPage(e.target.innerHTML);
    }
    
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="./" className="logo"><img src={ logo } className="logo-img" alt="logo" /></a>
                    {deviceType==='Desktop'? <div className="vertical-line"></div> : null}
                    {deviceType==='Desktop'? 
                        (<div className="desktop-menu">
                            <div className="menu-container" onClick={makeActive}>
                                <a href="./" className={ currentPage==='Home' ? "active menu-item" : "menu-item" } >Home</a>
                                <a href="./supplier" className={ currentPage==='Supplier' ? "active menu-item" : "menu-item" } >Supplier</a>
                                <a href="./about" className={ currentPage==='About' ? "active menu-item" : "menu-item" } >About</a>
                                <a href="./contact" className={ currentPage==='Contact' ? "active menu-item" : "menu-item" } >Contact</a>
                            </div>
                            <button className="header-btn">Get Started</button>
                        </div>) :
                        <div className="mobile-menu">
                            <img src={ burger } className="burger-img" alt="burger icon" />
                        </div>
                    }
                </nav>
            </div>
        </header>
        
    )
}

export default Header;