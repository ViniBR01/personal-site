import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <p className="logo">Vini Da Silva</p>
                <span className="navbutton">Hello</span>
                <span className="navbutton"> About me</span>
                <span className="navbutton"> Projects</span>
                <span className="navbutton"> Photos</span>
                <span className="navbutton"> Blog</span>
                <span className="navbutton"> Contact</span>
            </div>
        );
    }
}

export default NavBar;
