import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import brakes1 from '../../../assets/images/brakes_1.jpg';
import brakes2 from '../../../assets/images/brakes_2.jpg';
import { Link } from 'react-router-dom';


export default class BrakeGrindingSolution extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header as="h5">Front Brakes</Card.Header>
                                <Card.Img variant="top" src={brakes1} />
                                <Card.Body>
                                    <Card.Title>Replacing Front Brake Pads</Card.Title>
                                    <Card.Text className="mt-2">
                                        Step by step instructions (with pics) on how to replace the Front Brake Pads.
                                        </Card.Text>
                                    <Link to="/BrakeGrindingSolutionFrontBrakes">
                                        <Button action variant="primary">Show me how</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">Rear Brakes</Card.Header>
                                <Card.Img variant="top" src={brakes2} />
                                <Card.Body>
                                    <Card.Title>Replacing Rear Brake Pads</Card.Title>
                                    <Card.Text className="mt-2">
                                        Step by step instructions (with pics) on how to replace the Rear Brake Pads.
                                    </Card.Text>
                                    <Link to="/BrakeGrindingSolutionRearBrakes">
                                        <Button action variant="primary">Show me how</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );

    }
}