import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function SiteRouter() {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }, 30);
        
        window.addEventListener("resize", debouncedHandleResize);
        
        return _ => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    return (
        <Router>
            <NavBar windowDimension={dimensions.width} />
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

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default SiteRouter;
