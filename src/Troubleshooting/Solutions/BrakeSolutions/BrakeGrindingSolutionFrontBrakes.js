import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

export default class BrakeGrindingSolutionFrontBrakes extends React.Component {
    render() {
        return (
            <div>
                <Container className="pb-5">
                    <Row>
                        <Col>
                            <h2 className="mt-5">Replacing Front Brake Pads</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <h5>What is that grinding sound?</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-3">
                            <p>When a brake pad wears down on a rotor, it will often make a squeaking sound when applied.
                            This is an audible safety measure to make sure that the driver knows to change the brakes soon.
                            Unfortunately, some pads don't do this particularly well, so newer cars have brake pad wear sensors installed as part of their system,
                            alerting the driver on the dash that the pads needs replacement. In addition, when a brake pad gets low,
                            it will require a longer stroke of the caliper's piston to clamp down on the rotor, therefore lowering the amount of fluid in your brake reservoir. If the pads are low, you'll be able to see a noticeable change in your brake fluid's level, and may even get a "BRAKE" warning light on the instrument cluster.
                            </p>
                            <p>
                            If all these signs are ignored, the pad's material will wear down to the point where the only thing making contact with the rotor surface is the pad's metal backing plate, which is made of steel, and it will make heavy grooves in your rotor's surface, forcing you to replace the rotors as well.
                            </p>
                        </Col>
                    </Row>
                    <Row className="pt-5">
                        <Col>
                            <Table>
                                <thead><h3>Tools needed</h3></thead>
                                <tbody className="list-styled">
                                    <tr><li>3/8" Ratchet</li></tr>
                                    <tr><li>1/2" Ratchet</li></tr>
                                    <tr><li>1/2" Breaker Bar</li></tr>
                                    <tr><li>3/8" Assorted extensions</li></tr>
                                    <tr><li>3/8" Sockets, assorted</li></tr>
                                    <tr><li>1/2" Sockets, Assorted</li></tr>
                                    <tr><li>Open-ended wrenches, assorted</li></tr>
                                    <tr><li>Torx sockets, assorted (Used mainly on German and some American cars)</li></tr>
                                    <tr><li>Hex sockets, assorted (Used mainly on German and some American cars)</li></tr>
                                    <tr><li>Reverse Torx sockets, assorted (Used mainly on German and some American cars)</li></tr>
                                    <tr><li>C-Clamp</li></tr>
                                    <tr><li>Hydraulic Jack</li></tr>
                                    <tr><li>Jack Stands</li></tr>
                                    <tr><li>Pry Bar</li></tr>
                                    <tr><li>Wire Brush</li></tr>
                                    <tr><li>Gloves</li></tr>
                                    <tr><li>WD-40</li></tr>
                                    <br></br>
                                </tbody>
                            </Table>
                            <h3>Parts Info</h3>
                            <Table striped bordered>
                                <thead>
                                    <tr>
                                        <th>Part Description</th>
                                        <th>Isuzu Part #</th>
                                        <th>Aftermarket Part Info</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr>
                                            <td>Brake Pads</td>
                                            <td>8970352571</td>
                                            <td>Duralast Ceramic Brake Pads MKD579</td>
                                        </tr>
                                        <tr>
                                            <td>Brake Rotors</td>
                                            <td>8970317720</td>
                                            <td><li>Duralast Brake Rotor 31163</li><li>Duralast Brake Rotor 31084</li></td>
                                        </tr>
                                    </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );

    }
}