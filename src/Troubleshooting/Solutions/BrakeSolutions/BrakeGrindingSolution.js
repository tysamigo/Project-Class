import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import brakes1 from '../../../assets/images/brakes_1.jpg';

export default class BreakGrindingSolution extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <p>Col 1 of 2</p>
                            <Card style={{ width: '19rem' }}>
                                <Card.Header as="h5">Front Brakes</Card.Header>
                                <Card.Img variant="top" src={brakes1} />
                                <Card.Body>
                                    <Card.Title>Replacing Front Brake Pads</Card.Title>
                                    <Card.Text className="mt-2">
                                        Step by step instructions (with pics) on how to replace the Front Brake Pads.
                                    </Card.Text>
                                    <Button action variant="primary">Show me how</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <p>Col 2 of 2</p>
                            <Card style={{ width: '19rem' }}>
                                <Card.Header as="h5">Rear Brakes</Card.Header>
                                <Card.Img variant="top" src={brakes1} />
                                <Card.Body>
                                    <Card.Title>Replacing Rear Brake Pads</Card.Title>
                                    <Card.Text className="mt-2">
                                        Step by step instructions (with pics) on how to replace the Rear Brake Pads.
                                    </Card.Text>
                                    <Button action variant="primary">Show me how</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );

    }
}