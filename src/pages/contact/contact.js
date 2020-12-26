import React from 'react';
import './contact.css';
import Title from '../../components/Title/Title';
import {
    FaFacebook,
    FaGithub,
    FaYoutube,    
    FaLinkedin
} from 'react-icons/fa';

function Contact() {
    return (
        <div className="page-wrapper-contact">
            <Title title_text="Don't be a stranger" />

            <div className="social-media-wrap" >
                
                <div className="social-media-title" ><h3>Social Media</h3></div>
                
                <div className="social-media-box" >
                    <div className="social-media-icon">
                        <FaLinkedin />
                    </div>
                    <p>@vini-goncalves</p>
                </div>

                <div className="social-media-box" >
                    <div className="social-media-icon">
                        <FaGithub />
                    </div>
                    <p>@ViniBR</p>
                </div>

                <div className="social-media-box" >
                    <div className="social-media-icon">
                        <FaFacebook />
                    </div>
                    <p>@VGoncalves29</p>
                </div>

                <div className="social-media-box" >
                    <div className="social-media-icon">
                        <FaYoutube />
                    </div>
                    <p>@channel</p>
                </div>
            </div>
            
            <div className="message-form-wrap" >
                <div>
                    <div><h3>Message Me</h3></div>
                    <div>
                        Name-email-message
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
