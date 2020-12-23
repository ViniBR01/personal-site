import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {
    /* Initialize the state */
    constructor(props) {
        super(props);
        this.clickHamburguer = this.clickHamburguer.bind(this);
        this.state = {
            hamburguerButton: false
        };
    }

    clickHamburguer(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    
    render() {
        //console.log(this.props.windowDimension);
        const isMobile = this.props.windowWidth <= 810;
        let NavBarContent;
        if (isMobile) {
            NavBarContent = (
                    <nav className="navbar-mobile">
                        <div className="navbar-mobile-container">
                            <NavLink exact to="/" className="navbar-logo">
                                Vini Da Silva
                            </NavLink>
                            <div className="navbar-button">
                                <i className={hamburguerClick ? }
                            </div>
                        </div>
                    </nav>        
            );
        } else {
            NavBarContent = (
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
                                            <NavLink exact className="nav-link" to="/">Home</NavLink>
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
                
            );
        }
        
        return (
            <div className="topbar-wrapper">
                { NavBarContent }
            </div>
            
        );
    }
}

export default NavBar;
