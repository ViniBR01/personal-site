import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import About from '../../pages/about/about';
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
                                Home page!
                                <h1>Hello, world!</h1>
                                <h3>height: {this.state.height}px</h3>
                                <h3>width: {this.state.width}px</h3>
                            </div>
                        </Route>
                        <Route exact path="/about">
                            <div className="main-content">
                                <About />
                            </div>
                        </Route>
                        <Route exact path="/projects">
                            <div className="main-content">
                                Projects!
                            </div>
                        </Route>
                        <Route exact path="/hobbies">
                            <div className="main-content">
                                Photography!
                            </div>
                        </Route>
                        <Route exact path="/blog">
                            <div className="main-content">
                                My Blog!
                            </div>
                        </Route>
                        <Route exact path="/contact">
                            <div className="main-content">
                                Contact me!
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
