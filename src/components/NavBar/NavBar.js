import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
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
}

export default NavBar;
