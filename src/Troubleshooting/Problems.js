import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { QUESTION_KEY_BRAKES, QUESTION_KEY_ENGINE, QUESTION_KEY_HEATING_AC, QUESTION_KEY_STEERING_HANDLING, QUESTION_KEY_TIRES_WHEELS } from './Questions';
import { SOLUTION_KEY_GRINDING } from './Solutions/Brake';

export class Problems extends React.Component {
    render() {
        let listGroup = null;

        if (this.props.questionKey === QUESTION_KEY_BRAKES) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_GRINDING)}>Brakes grinding</ListGroup.Item>
                <ListGroup.Item action>Brakes squealing</ListGroup.Item>
                <ListGroup.Item action>My brakes pull</ListGroup.Item>
                <ListGroup.Item action>I have a hard brake pedal</ListGroup.Item>
                <ListGroup.Item action>I have a spongy or low brake pedal</ListGroup.Item>
                <ListGroup.Item action>I have a pulsating brake pedal</ListGroup.Item>
            </ListGroup>;
        } else if (this.props.questionKey === QUESTION_KEY_ENGINE) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action>Engine Problem 1</ListGroup.Item>
                <ListGroup.Item action>Engine Problem 2</ListGroup.Item>
                <ListGroup.Item action>Engine Problem 3</ListGroup.Item>
                <ListGroup.Item action>Engine Problem 4</ListGroup.Item>
                <ListGroup.Item action>Engine Problem 5</ListGroup.Item>
            </ListGroup>;
        } else if (this.props.questionKey === QUESTION_KEY_HEATING_AC) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action>Heating A/C Problem 1</ListGroup.Item>
                <ListGroup.Item action>Heating A/C Problem 2</ListGroup.Item>
                <ListGroup.Item action>Heating A/C Problem 3</ListGroup.Item>
                <ListGroup.Item action>Heating A/C Problem 4</ListGroup.Item>
                <ListGroup.Item action>Heating A/C Problem 5</ListGroup.Item>
            </ListGroup>;
        } else if (this.props.questionKey === QUESTION_KEY_STEERING_HANDLING) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action>Steering & Handling Problem 1</ListGroup.Item>
                <ListGroup.Item action>Steering & Handling Problem 2</ListGroup.Item>
                <ListGroup.Item action>Steering & Handling Problem 3</ListGroup.Item>
                <ListGroup.Item action>Steering & Handling Problem 4</ListGroup.Item>
                <ListGroup.Item action>Steering & Handling Problem 5</ListGroup.Item>
            </ListGroup>;
        } else if (this.props.questionKey === QUESTION_KEY_TIRES_WHEELS) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action>Tires & Wheels Problem 1</ListGroup.Item>
                <ListGroup.Item action>Tires & Wheels Problem 2</ListGroup.Item>
                <ListGroup.Item action>Tires & Wheels Problem 3</ListGroup.Item>
                <ListGroup.Item action>Tires & Wheels Problem 4</ListGroup.Item>
                <ListGroup.Item action>Tires & Wheels Problem 5</ListGroup.Item>
            </ListGroup>;
        }
        return listGroup;
    }
}
