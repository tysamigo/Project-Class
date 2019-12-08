import React from 'react';
import { QUESTION_KEY_BRAKES, QUESTION_KEY_ENGINE } from '../Questions';
import BrakeSolutions from './Brake';
import EngineSolutions from './Engine';

export default class Solutions extends React.Component {
    render() {
        let solution = null;
        
        if (this.props.questionKey === QUESTION_KEY_BRAKES) {
            solution = <BrakeSolutions solutionKey={this.props.solutionKey}/>;
        } else if (this.props.questionKey === QUESTION_KEY_ENGINE) {
            solution = <EngineSolutions />;
        }

        return solution;
    }
}