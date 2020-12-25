import React from 'react';
import './about.css'

const PROFILE_IMAGE_PATH = '/assets/profile-pic-small.jpg'

function About() {
    return (
        <div className="page-wrapper">
            <div className="title" >
                <h1>About Me</h1>
            </div>

            <div className="image-wrapper" >
                <img src={ PROFILE_IMAGE_PATH } alt="Profile of Vini" className="img-profile"/>
            </div>

            <div className="page-text" >
                <h2>My name is Vinicius da Silva</h2>
                
                <h3>I'm an Electrical & Computer Engineer and a Developer from Brazil.</h3>
                <p>Currently I'm based in Houston-TX, where I'm working towards a PhD at Rice University.</p>
                <p>My research focuses on wireless communications and, more specifically, on the performance of multi-user transmissions in the next generation WLAN technologies.</p>
            </div>

            <div className="box-text" >
                <ul className="main-list">
                    <li>
                        <p>Experience:</p>
                        <ul>
                            <li>
                                <p>Research Assitant and PhD Candidate @ Rice University</p>
                            </li>
                            <li>
                                <p>Incoming Summer Intern @ Facebook Communication</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Education:</p>
                        <ul>
                            <li>
                                <p>Masters of Science in Electrical and Computer Engineering, Rice University, 2020</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Technologies:</p>
                        <ul>
                            <li>
                                <p>IEEE802.11 Protocol, ns-3, FPGA design, C/C++, Python, Javascript, React, Git, Emacs.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Interests:</p>
                        <ul>
                            <li>
                                <p>Technology, Photography, Webdesign, Baking.</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="button-wrapper" >
                <a href="./assets/Resume-Vini-2020.pdf" download>Download Resume</a>
            </div>
        </div>
    );
}

export default About;
