import React from 'react';
import { QUESTION_KEY_BRAKES, QUESTION_KEY_ENGINE, QUESTION_KEY_HEATING_AC } from '../Questions';
import BrakeSolutions from './Brake';
import EngineSolutions from './Engine';
import HeatingAcSolutions from './HeatingAc';

export default class Solutions extends React.Component {
    render() {
        let solution = null;
        
        if (this.props.questionKey === QUESTION_KEY_BRAKES) {
            solution = <BrakeSolutions solutionKey={this.props.solutionKey}/>;
        } else if (this.props.questionKey === QUESTION_KEY_ENGINE) {
            solution = <EngineSolutions solutionKey={this.props.solutionKey} />;
        } else if (this.props.questionKey === QUESTION_KEY_HEATING_AC) {
            solution = <HeatingAcSolutions solutionKey={this.props.solutionKey} />;
        }

        return solution;
    }
}