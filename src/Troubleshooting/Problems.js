import React from 'react';
import { ListGroup } from 'react-bootstrap';

export class Problems extends React.Component {
    render() {
        return (
            <ListGroup className="pb-5">
                <ListGroup.Item action onClick={this.props.chooseQuestion}>Brakes grinding</ListGroup.Item>
                <ListGroup.Item action onClick={this.props.chooseQuestion}>Brakes squealing</ListGroup.Item>
                <ListGroup.Item action onClick={this.props.chooseQuestion}>My brakes pull</ListGroup.Item>
                <ListGroup.Item action onClick={this.props.chooseQuestion}>I have a hard brake pedal</ListGroup.Item>
                <ListGroup.Item action onClick={this.props.chooseQuestion}>I have a spongy or low brake pedal</ListGroup.Item>
                <ListGroup.Item action onClick={this.props.chooseQuestion}>I have a pulsating brake pedal</ListGroup.Item>                
            </ListGroup>
        );
    }
}
