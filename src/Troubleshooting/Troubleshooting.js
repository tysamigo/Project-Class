import React from 'react';
import { Table, Container, ListGroup } from 'react-bootstrap';
import Stepper from 'bs-stepper';
import { Questions } from './Questions';

class Troubleshooting extends React.Component {
    state = {
        mainCategory: null
    };

    constructor(props, context) {
        super(props, context);

        console.log('constructor');
    }

    chooseQuestion = (event) => {
        this.setState({
            mainCategory: event.currentTarget.innerText
        }, () => {
            this.stepper.next();
        });

        event.preventDefault();
    }

    componentDidMount() {
        console.log('componentDidMount');

        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');

        return (
            <Container className="pb-5">
                <h1 className="heading pb-5">Troubleshooting</h1>
                <h3 className="pb-3">What's wrong with your VX?</h3>

                <h4>{this.constructedValue}</h4>

                <div id="stepper1" className="bs-stepper">
                    <div className="bs-stepper-header">
                        <div className="step" data-target="#questions">
                            <button className="step-trigger">
                                <span className="bs-stepper-circle">1</span>
                                <span className="bs-stepper-label">Questions</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#problems">
                            <button className="step-trigger">
                                <span className="bs-stepper-circle">2</span>
                                <span className="bs-stepper-label">Problems</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#test-l-3">
                            <button className="step-trigger">
                                <span className="bs-stepper-circle">3</span>
                                <span className="bs-stepper-label">Validate</span>
                            </button>
                        </div>
                    </div>
                    <div className="bs-stepper-content">
                        <div id="questions" className="content">
                            <Questions chooseQuestion={this.chooseQuestion}/>                            
                        </div>
                        <div id="problems" className="content">
                            <div>{this.state.mainCategory}</div>
                        </div>
                        <div id="test-l-3" className="content text-center">
                            <button type="submit" className="btn btn-primary mt-5">Submit</button>
                        </div>
                    </div>
                </div>



            </Container>
        );
    }
}

export default Troubleshooting;