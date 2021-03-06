import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import Projects from '../../pages/projects/projects';
import Contact from '../../pages/contact/contact';
import Footer from '../Footer/Footer';

class App extends React.Component {
    /* Initialize the state */
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }

    /* Function to maintain the window size updated */
    handleResize() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }
    /* Create event listener to check window resize */
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    /* Remove event listener when the componenet unmount */
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    
    render() {
        return (
            <div className="page-container">
                <BrowserRouter>
                    <NavBar windowWidth={this.state.width} />
                    <Switch>                        
                        <Route exact path="/">
                            <div className="main-content">
                                <Home />
                            </div>
                        </Route>
                        <Route exact path="/about">
                            <div className="main-content">
                                <About />
                            </div>
                        </Route>
                        <Route exact path="/projects">
                            <div className="main-content">
                                <Projects />
                            </div>
                        </Route>
                        <Route exact path="/hobbies">
                            <div className="main-content">
                                <h1>Hobbies</h1>
                                <ul>
                                    <li>Photography</li>
                                    <li>Baking and Cooking</li>
                                    <li>Biking</li>
                                    <li>Online Gaming</li>
                                </ul>
                            </div>
                        </Route>
                        <Route exact path="/blog">
                            <div className="main-content">
                                My Blog!
                            </div>
                        </Route>
                        <Route exact path="/contact">
                            <div className="main-content">
                                <Contact />
                            </div>
                        </Route>
                        <Route path="*">
                            <div className="main-content">
                                404 Not Found!
                            </div>
                        </Route>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
