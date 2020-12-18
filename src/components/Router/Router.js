import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function SiteRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    Home page!
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
        </Router>
    );
}

export default SiteRouter;
