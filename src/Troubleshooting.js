import React from 'react';
import { Table, Container, ListGroup } from 'react-bootstrap';

class Troubleshooting extends React.Component {
    
    render() {
        return (
            <Container className="pb-5">
                <h1 className="heading pb-5">Troubleshooting</h1>                
                <h3 className="pb-3">What's wrong with your VX?</h3>
                <ListGroup className="pb-5">
                    <ListGroup.Item action>Brakes</ListGroup.Item>
                    <ListGroup.Item action>Engine</ListGroup.Item>
                    <ListGroup.Item action>Heating and A/C</ListGroup.Item>
                    <ListGroup.Item action>Steering & Handling</ListGroup.Item>
                    <ListGroup.Item action>Tires & Wheels</ListGroup.Item>
                </ListGroup>                
            </Container>
        );
    }
}

export default Troubleshooting;