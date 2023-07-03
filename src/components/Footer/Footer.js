// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <a href="https://github.com/kylearmour1"target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/kyle-armour-5879aa261/"target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            
        </footer>
    );
}

export default Footer;
