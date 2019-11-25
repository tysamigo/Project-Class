import React from 'react';
import { ListGroup } from 'react-bootstrap';

export class Questions extends React.Component {
    render() {
        return (
            <ListGroup className="pb-5">
                <ListGroup.Item action onClick={this.props.chooseQuestion}>Brakes</ListGroup.Item>
                <ListGroup.Item action onClick={this.props.chooseQuestion}>Engine</ListGroup.Item>
                <ListGroup.Item action onClick={this.props.chooseQuestion}>Heating and A/C</ListGroup.Item>
                <ListGroup.Item action onClick={this.props.chooseQuestion}>Steering & Handling</ListGroup.Item>
                <ListGroup.Item action onClick={this.props.chooseQuestion}>Tires & Wheels</ListGroup.Item>
            </ListGroup>
        );
    }
}