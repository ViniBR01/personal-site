import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function logmessage(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

class NavBar extends React.Component {


    
    render() {
        //console.log(this.props.windowDimension);
        const isMobile = this.props.windowDimension <= 810;
        let NavBarContent;
        if (isMobile) {
            NavBarContent = (


                <div className="topbar-wrapper">
                    <div className="topbar-box">
                        <div className="navbar-wrapper">
                            <div className="navbar-box">
                                
                                <div className="logo-wrapper">
                                    <div className="logo-box">
                                        <p className="logo">Mobile bar</p>
                                    </div>
                                </div>
                                
                                <div className="navitemsmobile-wrapper">
                                    
                                    <button className="navitemsmobile-button" type="button" onClick={logmessage}></button>
                                    
                                    
                                </div>
                                
                            </div>
                        </div>







                        <nav className="navitemsmobile-box">
                            
                            <ul>
                                <li>
                                    <NavLink exact className="navmobile-link" to="/">Hello</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="navmobile-link" to="/about">About me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="navmobile-link" to="/projects">Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="navmobile-link" to="/photos">Photos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="navmobile-link" to="/blog">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="navmobile-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            
                        </nav>







                        


                        
                    </div>
                </div>
            );
        } else {
            NavBarContent = (
                <div className="topbar-wrapper">
                    <div className="topbar-box">
                        <div className="navbar-wrapper">
                            <div className="navbar-box">
                                
                                <div className="logo-wrapper">
                                    <div className="logo-box">
                                        <p className="logo">Vini Da Silva</p>
                                    </div>
                                </div>
                                
                                <div className="navitems-wrapper">
                                    <nav className="navitems-box">
                                        
                                        <ul className="navitems-list">
                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/">Hello</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/about">About me</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/projects">Projects</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/photos">Photos</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/blog">Blog</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                        
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
        return (
            <div>
                { NavBarContent }
            </div>
                    
        );
    }
}

export default NavBar;
