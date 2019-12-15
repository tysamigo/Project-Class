import React from 'react';
import './App.css';
import WhatIsIt from './WhatIsIt';
import Parts from './Parts';
import * as vxLogo from './assets/images/vx_logo_small_2.png';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import NotFound from './NotFound';
import Maintenance from './Maintenance';
import Troubleshooting from './Troubleshooting/Troubleshooting';
import Navbar from 'react-bootstrap/Navbar'
import { Modal } from 'react-bootstrap';
import BrakeGrindingSolutionFrontBrakes from './Troubleshooting/Solutions/BrakeSolutions/BrakeGrindingSolutionFrontBrakes';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showContactDialog: false,
            showSignUpDialog: false
        };
    }

    showContactDialog = () => {
        this.setState({
            showContactDialog: true
        });
    }

    closeContactDialog = () => {
        this.setState({
            showContactDialog: false
        });
    }

    showSignUpDialog = () => {
        this.setState({
            showSignUpDialog: true
        });
    }

    closeSignUpDialog = () => {
        this.setState({
            showSignUpDialog: false
        });
    }

    render() {
        return (
            <BrowserRouter>

                {/*Navigation*/}
                <div className="container-fluid">
                    <Navbar collapseOnSelect expand="sm" bg-light mb-0 pb-0 mt-0 pt-0>
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
                                <Link to="/Troubleshooting" className="nav-item nav-link pr-3">Troubleshooting</Link>
                            </div>
                        </div>
                    </Navbar>
                </div>

                <div className="body">

                    {/* 
                        This is the selector for the React router.
                        This tells the router which component to map to
                        each page the user vists.
                    */}
                    <Switch>
                        <Route exact path="/" component={WhatIsIt} />
                        <Route path="/parts" component={Parts} />
                        <Route path="/Maintenance" component={Maintenance} />
                        <Route path="/Troubleshooting" component={Troubleshooting} />
                        <Route path="/BrakeGrindingSolutionFrontBrakes" component={BrakeGrindingSolutionFrontBrakes} />
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

                                    <button onClick={this.showSignUpDialog} type="button" className="btn btn-secondary mb-3">
                                        Sign up now
                                    </button>
                                </div>

                                <div className="col-md">
                                    <p className="font-weight-light">All images, captions and content are Copyright © 1997-2019 Isuzu Motors
                                        Corporation, Goldsmith Photography and/or Tyler Ramage unless otherwise stated. If there are any
                                        comments or objections, please contact <button onClick={this.showContactDialog} type="button" className="btn btn-link">Tyler Ramage</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>

                    {/*Contact Tyler Modal*/}
                    <Modal dialogClassName="bg-primary" show={this.state.showContactDialog} onHide={this.closeContactDialog}>
                        <Modal.Header className="bg-primary text-white" closeButton>
                            <Modal.Title>Contact Tyler</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <hr my-4 />
                                <div className="form-group">
                                    <label for="contactTyler">Comments/Suggestions:</label>
                                    <textarea className="form-control" id="contactTyler" rows="8"></textarea>
                                </div>
                            </form>
                            <div class="modal-footer">
                                <button onClick={this.closeContactDialog} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={this.closeContactDialog} type="button" className="btn btn-primary" data-dismiss="modal">Send</button>
                            </div>
                        </Modal.Body>
                    </Modal>

                    {/*Sign-Up Modal*/}
                    <Modal dialogClassName="bg-primary" show={this.state.showSignUpDialog} onHide={this.closeSignUpDialog}>
                        <Modal.Header className="bg-primary text-white" closeButton>
                            <Modal.Title>Sign Up</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <hr my-4 />
                                <h6 className="form-group">Stay informed when new info is posted to the site.</h6>
                                <h6 className="form-group">Choose one or more:</h6>
                                <div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="spareParts" />
                                        <label className="custom-control-label" for="spareParts">Updated Spare Parts Compatibility List</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="ledChart" />
                                        <label className="custom-control-label" for="ledChart">Updated LED Replacement Chart</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="newMod" />
                                        <label className="custom-control-label" for="newMod">New mods on my VX (w/write-up's)</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="howTo" />
                                        <label className="custom-control-label" for="howTo">New How-To's posted</label>
                                    </div>
                                </div>
                            </form>
                            <div className="modal-footer">
                                <button onClick={this.closeSignUpDialog} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={this.closeSignUpDialog} type="button" className="btn btn-primary" data-dismiss="modal">Send</button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;