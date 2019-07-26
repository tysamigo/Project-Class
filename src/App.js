import React from 'react';
import './App.css';
import WhatIsIt from './WhatIsIt';
import Parts from './Parts';
import * as vxLogo from './assets/images/vx_logo_small_2.png';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import NotFound from './NotFound';
import Maintenance from './Maintenance';

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md bg-light mb-0 pb-0 mt-0 pt-0 fixed-top">
                    <Link to="/" className="navbar-brand">
                        <img className="navbar-brand img-fluid" src={vxLogo} alt="VehiCross Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className="nav-item nav-link pr-3">Home</Link>
                            <Link to="/parts" className="nav-item nav-link pr-3">Parts</Link>
                            <Link to="/Maintenance" className="nav-item nav-link pr-3">Maintenance</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="body">

                <Switch>
                    <Route exact path="/" component={WhatIsIt} />
                    <Route path="/parts" component={Parts} />
                    <Route path="/Maintenance" component={Maintenance} />
                    <Route component={NotFound} />
                </Switch>

                <footer>
                    <div className="container">
                        <div className="row p-4 text-muted">
                            <div className="col-md">
                                <p><strong>Are you a VX owner?</strong><br />Over the years I have performed many mods to my VX.
                                    I've documented each step of the way and have put together a ton of info including a Parts
                                    Compatibility List, LED Replacement & Compatibility List, and "how to's". Stay
                                    up-to-date on new released revisions.
                                </p>

                                <button type="button" className="btn btn-secondary mb-3" data-toggle="modal" data-target="#signUp">
                                    Sign up now
                                </button>
                            </div>

                            <div className="col-md">
                                <p className="font-weight-light">All images, captions and content are Copyright © 1997-2019 Isuzu Motors
                                    Corporation, Goldsmith Photography and/or Tyler Ramage unless otherwise stated. If there are any
                                    comments or objections, please contact <button type="button" className="btn btn-link"
                                    data-toggle="modal" data-target="#contact">Tyler Ramage</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
