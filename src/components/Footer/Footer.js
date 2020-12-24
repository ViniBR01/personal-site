import React from 'react';
import './Footer.css';
//import { Link } from 'react-router-dom';
import {
    FaWifi,
    FaFacebook,
    FaGithub,
    FaYoutube,
    
    FaLinkedin
} from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return (
            <section className="footer-container">
                <div className="footer-logo">
                    <FaWifi className="footer-logo-icon" />
                    Vini Da Silva
                </div>
                
                <small className='website-rights'>Vini Da Silva © 2020</small>

                <div className="social-media">
                    <a className='social-icon-link' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vini-goncalves/">
                        <FaLinkedin />
                    </a>
                    <a className='social-icon-link' target="_blank" rel="noopener noreferrer" href="https://github.com/ViniBR01">
                        <FaGithub />
                    </a>
                    <a className='social-icon-link' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vgoncalves29">
                        <FaFacebook />
                    </a>
                    <a className='social-icon-link' target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCuWu3CcWPARJzqw3v7mXUxw">
                        <FaYoutube />
                    </a>
                </div>
                
            </section>
        );
    }
}

export default Footer;
