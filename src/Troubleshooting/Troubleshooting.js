import React from 'react';
import { Container } from 'react-bootstrap';
import Stepper from 'bs-stepper';
import { Questions } from './Questions';
import { Problems } from './Problems';
import Solutions from './Solutions/Solutions';

export default class Troubleshooting extends React.Component {
    state = {
        questionKey: null,
        solutionKey: null
    };

    constructor(props, context) {
        super(props, context);

        console.log('constructor');
    }

    chooseQuestion = (questionKey) => {
        this.setState({
            questionKey: questionKey
        }, () => {
            this.stepper.next();
            window.scrollTo(0,0);
        });
    }

    chooseProblem = (solutionKey) => {
        this.setState({
            solutionKey: solutionKey
        }, () => {
            this.stepper.next();
            window.scrollTo(0,0);
        });
    }

    componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        });
    }

    render() {
        console.log('render');

        return (
            <Container className="pb-5">
                <h1 className="heading pb-5 mt-5">Troubleshooting</h1>
                <h3 className="pb-3">What's wrong with your VX?</h3>

                {/*Stepper Component */}
                <div id="stepper1" className="bs-stepper">
                    
                    {/*Stepper Headers */}
                    <div className="bs-stepper-header pb-3">
                        <div className="step" data-target="#questions">
                            <button onClick={() => {this.setState({solutionKey: null, questionKey: null})}} className="step-trigger">
                                <span className="bs-stepper-circle">1</span>
                                <span className="bs-stepper-label">Questions</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#problems">
                            <button onClick={() => this.setState({solutionKey: null})} disabled={!this.state.questionKey} className="step-trigger">
                                <span className="bs-stepper-circle">2</span>
                                <span className="bs-stepper-label">Problems</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#solutions">
                            <button disabled={!this.state.solutionKey} className="step-trigger">
                                <span className="bs-stepper-circle">3</span>
                                <span className="bs-stepper-label">Solutions</span>
                            </button>
                        </div>
                    </div>
                    
                    {/* Stepper Content */}
                    <div className="bs-stepper-content">

                        {/* Step 1 */}
                        <div id="questions" className="content">
                            <Questions chooseQuestion={this.chooseQuestion}/>                            
                        </div>

                        {/* Step 2 */}
                        <div id="problems" className="content">
                            <Problems questionKey={this.state.questionKey} chooseProblem={this.chooseProblem} />
                        </div>

                        {/* Step 3 */}
                        <div id="solutions" className="content text-center">
                            <Solutions questionKey={this.state.questionKey} solutionKey={this.state.solutionKey} />
                        </div>

                    </div>
                </div>
            </Container>
        );
    }
}