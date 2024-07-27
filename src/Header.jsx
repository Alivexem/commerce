import { useState } from "react";
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <>
            <div className="green">
                <p> FREE DELIVERY - ORDER TODAY</p>
            </div>
            <div className="line">
            <div className="logoDiv">
                <div>
                    <img style={{borderRadius: '50%', marginRight: '15px', marginLeft: '20px'}} src="frankylogo.png" height={60} width={60} />
                </div>
                <div>
                    <h2>Franky's Pet Shop</h2>
                    <p>Your Pets - Our Care</p>

                </div>
            </div>
            <div className="adj">
                <div className="searchDiv">
                    <input className="search" placeholder="Search..." />

                    <div className="around">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <div className="call">
                    <h3>Call Us</h3>
                    <p>[+234] 8021260918</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Header