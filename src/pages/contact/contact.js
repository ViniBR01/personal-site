import React from 'react';
import './contact.css';
import Title from '../../components/Title/Title';
import ContactForm from './ContactForm';
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
                <div className="social-media-container">
                    
                    <div className="social-media-title" >
                        <h2>Social Media</h2>
                        <p>Follow me on my social media and let's talk</p>
                    </div>

                    <a className='contact-socialmedia-link'
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.linkedin.com/in/vini-goncalves/"
                    >
                        <div className="social-media-box" >
                            <div className="social-media-icon">
                                <FaLinkedin />
                            </div>
                            <p>@vini-goncalves</p>
                        </div>
                    </a>
                    <a className='contact-socialmedia-link'
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://github.com/ViniBR01"
                    >
                        <div className="social-media-box" >
                            <div className="social-media-icon">
                                <FaGithub />
                            </div>
                            <p>@ViniBR</p>
                        </div>
                    </a>
                    <a className='contact-socialmedia-link'
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.facebook.com/vgoncalves29"
                    >
                        <div className="social-media-box" >
                            <div className="social-media-icon">
                                <FaFacebook />
                            </div>
                            <p>@VGoncalves29</p>
                        </div>
                    </a>
                    <a className='contact-socialmedia-link'
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.youtube.com/channel/UCuWu3CcWPARJzqw3v7mXUxw"
                    >
                        <div className="social-media-box" >
                            <div className="social-media-icon">
                                <FaYoutube />
                            </div>
                            <p>@channel</p>
                        </div>
                    </a>
                </div>
            </div>
            
            <div className="message-form-wrap" >
                <div className="message-form-container">
                    <div>
                        <h2>Message me</h2>
                        <p>Or send me an e-mail using the form below</p>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
