/* eslint-disable no-unused-expressions */
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import oil1 from './assets/images/oil_1.jpg';
import radiator1 from './assets/images/radiator_1.jpg';
import transmission1 from './assets/images/transmission_1.jpg';

export default class Maintenance extends React.Component {

    render() {
        return (
            <div>
                <Container className="pb-5">
                    <h1 className="heading mt-5 mb-5">Maintenance</h1>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header as="h5">Oil Change</Card.Header>
                                <Card.Img variant="top" src={oil1} />
                                <Card.Body>
                                    <Card.Title>Changing Oil & Filter</Card.Title>
                                    <Card.Text className="mt-2">
                                        Step by step instructions (with pics) on how to change the oil and filter.
                                    </Card.Text>
                                    <Button action variant="primary">Show me how</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">Flush Radiator</Card.Header>
                                <Card.Img variant="top" src={radiator1} />
                                <Card.Body>
                                    <Card.Title>Flushing Radiator and refill</Card.Title>
                                    <Card.Text className="mt-2">
                                        Step by step instructions (with pics) on how to flush the radiator and Refill.
                                    </Card.Text>
                                    <Button action variant="primary">Show me how</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">Transmission Fluid</Card.Header>
                                <Card.Img variant="top" src={transmission1} />
                                <Card.Body>
                                    <Card.Title>Replacing Transmission Fluid and Filter</Card.Title>
                                    <Card.Text className="mt-2">
                                        Step by step instructions (with pics) on how to replace Transmission Fluid & Filter.
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