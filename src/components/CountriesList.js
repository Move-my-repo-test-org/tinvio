import React from 'react';

function CountriesList() {
    return (
        <div className="countries-list-wrapper">
            <ul className="countries-list">
                <li className="country">
                    <span className="country-flag-icon">🇸🇬</span>
                    <p className="country-name">Singapore</p>
                </li>
                <li className="country">
                    <span className="country-flag-icon">🇮🇩</span>
                    <p className="country-name">Indonesia</p>
                </li>
                <li className="country">
                    <span className="country-flag-icon">🇦🇺</span>
                    <p className="country-name">Australia</p>
                </li>
                <li className="country">
                    <span className="country-flag-icon">🇹🇼</span>
                    <p className="country-name">Taiwan</p>
                </li>
                <li className="country">
                    <span className="country-flag-icon">🇭🇰</span>
                    <p className="country-name">Hong Kong</p>
                </li>
                <li className="country">
                    <span className="country-flag-icon">🇹🇭</span>
                    <p className="country-name">Thailand</p>
                </li>
                <li className="country">
                    <span className="country-flag-icon">🇮🇳</span>
                    <p className="country-name">India</p>
                </li>
                <li className="country">
                    <span className="country-flag-icon">🇻🇳</span>
                    <p className="country-name">Vietnam</p>
                </li>
            </ul>
        </div>
    )
}

export default CountriesList;
