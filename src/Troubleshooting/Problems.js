import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { QUESTION_KEY_BRAKES, QUESTION_KEY_ENGINE, QUESTION_KEY_HEATING_AC, QUESTION_KEY_STEERING_HANDLING, QUESTION_KEY_TIRES_WHEELS } from './Questions';
import { SOLUTION_KEY_GRINDING, SOLUTION_KEY_SQUEALING, SOLUTION_KEY_PULL, SOLUTION_KEY_HARD_PEDAL, SOLUTION_KEY_SPONGY_PEDAL, SOLUTION_KEY_PULSATING_PEDAL } from './Solutions/Brake';
import { SOLUTION_KEY_ENGINE_1, SOLUTION_KEY_ENGINE_2, SOLUTION_KEY_ENGINE_3, SOLUTION_KEY_ENGINE_4, SOLUTION_KEY_ENGINE_5 } from './Solutions/Engine';
import { SOLUTION_KEY_HEATING_AC_1, SOLUTION_KEY_HEATING_AC_2, SOLUTION_KEY_HEATING_AC_3, SOLUTION_KEY_HEATING_AC_4, SOLUTION_KEY_HEATING_AC_5 } from './Solutions/HeatingAc';
import { SOLUTION_KEY_STEERING_HANDLING_1, SOLUTION_KEY_STEERING_HANDLING_2, SOLUTION_KEY_STEERING_HANDLING_3, SOLUTION_KEY_STEERING_HANDLING_4, SOLUTION_KEY_STEERING_HANDLING_5 } from './Solutions/SteeringHandling';
import { SOLUTION_KEY_TIRES_WHEELS_1, SOLUTION_KEY_TIRES_WHEELS_2, SOLUTION_KEY_TIRES_WHEELS_3, SOLUTION_KEY_TIRES_WHEELS_4, SOLUTION_KEY_TIRES_WHEELS_5 } from './Solutions/TiresWheels';

export class Problems extends React.Component {
    render() {
        let listGroup = null;

        if (this.props.questionKey === QUESTION_KEY_BRAKES) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_GRINDING)}>Brakes grinding</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_SQUEALING)}>Brakes squealing</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_PULL)}>My brakes pull</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_HARD_PEDAL)}>I have a hard brake pedal</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_SPONGY_PEDAL)}>I have a spongy or low brake pedal</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_PULSATING_PEDAL)}> I have a pulsating brake pedal</ListGroup.Item>
            </ListGroup>;
        } else if (this.props.questionKey === QUESTION_KEY_ENGINE) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_ENGINE_1)}>Engine Problem 1</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_ENGINE_2)}>Engine Problem 2</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_ENGINE_3)}>Engine Problem 3</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_ENGINE_4)}>Engine Problem 4</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_ENGINE_5)}>Engine Problem 5</ListGroup.Item>
            </ListGroup>;
        } else if (this.props.questionKey === QUESTION_KEY_HEATING_AC) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_HEATING_AC_1)}>Heating A/C Problem 1</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_HEATING_AC_2)}>Heating A/C Problem 2</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_HEATING_AC_3)}>Heating A/C Problem 3</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_HEATING_AC_4)}>Heating A/C Problem 4</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_HEATING_AC_5)}>Heating A/C Problem 5</ListGroup.Item>
            </ListGroup>;
        } else if (this.props.questionKey === QUESTION_KEY_STEERING_HANDLING) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_STEERING_HANDLING_1)}>Steering & Handling Problem 1</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_STEERING_HANDLING_2)}>Steering & Handling Problem 2</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_STEERING_HANDLING_3)}>Steering & Handling Problem 3</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_STEERING_HANDLING_4)}>Steering & Handling Problem 4</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_STEERING_HANDLING_5)}>Steering & Handling Problem 5</ListGroup.Item>
            </ListGroup>;
        } else if (this.props.questionKey === QUESTION_KEY_TIRES_WHEELS) {
            listGroup = <ListGroup className="pb-5">
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_TIRES_WHEELS_1)}>Tires & Wheels Problem 1</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_TIRES_WHEELS_2)}>Tires & Wheels Problem 2</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_TIRES_WHEELS_3)}>Tires & Wheels Problem 3</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_TIRES_WHEELS_4)}>Tires & Wheels Problem 4</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseProblem(SOLUTION_KEY_TIRES_WHEELS_5)}>Tires & Wheels Problem 5</ListGroup.Item>
            </ListGroup>;
        }
        return listGroup;
    }
}