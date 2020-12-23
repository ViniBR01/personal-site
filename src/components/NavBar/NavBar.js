import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaWifi } from 'react-icons/fa'

class NavBar extends React.Component {
    /* Initialize the state */
    constructor(props) {
        super(props);
        this.clickHamburguer = this.clickHamburguer.bind(this);
        this.closeHamburguer = this.closeHamburguer.bind(this);
        this.state = {
            hamburguerButton: false
        };
    }

    clickHamburguer() {
        //e.preventDefault();
        //console.log('The link was clicked. Current state = ', this.state.hamburguerButton);
        this.setState((state, props) => ({
            hamburguerButton: !state.hamburguerButton
        }));
    }

    closeHamburguer() {
        this.setState({
            hamburguerButton: false
        });
    }
    
    render() {
        /* Condition the nav bar content on the screen size and on the button state */
        const isMobile = this.props.windowWidth <= 810;
        let NavBarContent;        
        if (isMobile) {
            NavBarContent = (
                <nav className="navbar-mobile">
                    <div className="navbar-mobile-container">
                        <NavLink exact to="/" className="navbar-logo" onClick={this.closeHamburguer}>
                            <FaWifi className="navbar-logo-icon" />
                            Vini Da Silva
                        </NavLink>
                        <div className="navbar-button" onClick={this.clickHamburguer}>
                            {this.state.hamburguerButton ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </nav>        
            );
        } else {
            NavBarContent = (
                <nav className="navbar-desktop">
                    <div className="navbar-desktop-container">
                        <NavLink exact to="/" className="navbar-logo">
                            <FaWifi className="navbar-logo-icon" />
                            Vini Da Silva
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about">About me</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/photos">Photos</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>       
                
            )
        }

        let MobileMenu;
        if (this.state.hamburguerButton && isMobile) {
            MobileMenu = (
                <nav className="navbar-mobile-menu">
                    <ul>
                        <li>
                            <NavLink exact to="/" onClick={this.closeHamburguer}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" onClick={this.closeHamburguer}>
                                About me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/projects" onClick={this.closeHamburguer}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/photos" onClick={this.closeHamburguer}>
                                Photos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/blog" onClick={this.closeHamburguer}>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" onClick={this.closeHamburguer}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            MobileMenu = null;
        }

        return (
            <div className="topbar-wrapper">
                { NavBarContent }
                { MobileMenu }
            </div>
            
        );
    }
}

export default NavBar;
