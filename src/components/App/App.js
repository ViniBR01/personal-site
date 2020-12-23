import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

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
            <div>
                <BrowserRouter>
                    <NavBar windowWidth={this.state.width} />
                    <Switch>                        
                        <Route exact path="/">
                            Home page!
                            <h1>Hello, world!</h1>
                            <h3>height: {this.state.height}px</h3>
                            <h3>width: {this.state.width}px</h3>
                        </Route>
                        <Route exact path="/about">
                            About me!
                        </Route>
                        <Route exact path="/projects">
                            Projects!
                        </Route>
                        <Route exact path="/photos">
                            Photography!
                        </Route>
                        <Route exact path="/blog">
                            My Blog!
                        </Route>
                        <Route exact path="/contact">
                            Contact me!
                        </Route>
                        <Route path="*">
                            404 Not Found!
                        </Route>
                    </Switch>
                    <div>
                        Footer content
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
