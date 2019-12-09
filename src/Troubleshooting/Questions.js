import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const QUESTION_KEY_BRAKES = "brakes";
export const QUESTION_KEY_ENGINE = "engine";
export const QUESTION_KEY_HEATING_AC = "heating-ac";
export const QUESTION_KEY_STEERING_HANDLING = "steering-handling";
export const QUESTION_KEY_TIRES_WHEELS = "tires-wheels";

export class Questions extends React.Component {
    render() {
        return (
            <ListGroup className="pb-5">
                <ListGroup.Item action onClick={() => this.props.chooseQuestion(QUESTION_KEY_BRAKES)}>Brakes</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseQuestion(QUESTION_KEY_ENGINE)}>Engine</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseQuestion(QUESTION_KEY_HEATING_AC)}>Heating & A/C</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseQuestion(QUESTION_KEY_STEERING_HANDLING)}>Steering & Handling</ListGroup.Item>
                <ListGroup.Item action onClick={() => this.props.chooseQuestion(QUESTION_KEY_TIRES_WHEELS)}>Tires & Wheels</ListGroup.Item>
            </ListGroup>
        );
    }
}