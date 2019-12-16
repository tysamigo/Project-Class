/* eslint-disable no-unused-expressions */
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

export default class Parts extends React.Component {

    render() {
        return (
        <Container className="pb-5">
            <h1 className="heading mt-5 mb-4">Parts</h1>
            <h4 className="mb-4">Select a Category</h4>
            <ListGroup className="pb-5">
                <ListGroup.Item action variant="light">Automatic Transmission</ListGroup.Item>
                <ListGroup.Item action variant="light">Body</ListGroup.Item>
                <ListGroup.Item action variant="light">Body Hardware</ListGroup.Item>
                <ListGroup.Item action variant="light">Brakes</ListGroup.Item>
                <ListGroup.Item action variant="light">Cooling System</ListGroup.Item>
                <ListGroup.Item action variant="light">Electrical</ListGroup.Item>
                <ListGroup.Item action variant="light">Emmission System</ListGroup.Item>
                <ListGroup.Item action variant="light">Engine</ListGroup.Item>
                <ListGroup.Item action variant="light">Exhaust System</ListGroup.Item>
                <ListGroup.Item action variant="light">Front Drive Axle</ListGroup.Item>
                <ListGroup.Item action variant="light">Front Suspension</ListGroup.Item>
                <ListGroup.Item action variant="light">Fuel System</ListGroup.Item>
                <ListGroup.Item action variant="light">HVAC</ListGroup.Item>
                <ListGroup.Item action variant="light">Maintenance & Lubrication</ListGroup.Item>
                <ListGroup.Item action variant="light">Rear Suspension</ListGroup.Item>
                <ListGroup.Item action variant="light">Steering</ListGroup.Item>
                <ListGroup.Item action variant="light">Transfer Case</ListGroup.Item>
                <ListGroup.Item action variant="light">Universal & Rear Axle</ListGroup.Item>
            </ListGroup>
        </Container>
        );
    }
}