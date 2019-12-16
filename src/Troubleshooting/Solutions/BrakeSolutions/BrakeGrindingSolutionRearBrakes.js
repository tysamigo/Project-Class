import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import brakes3 from '../../../assets/images/brakes_3.jpg';
import brakes4 from '../../../assets/images/brakes_4.jpg';

export default class BrakeGrindingSolutionRearBrakes extends React.Component {
    render() {
        return (
            <div>
                <Container className="pb-5">
                    <Row>
                        <Col>
                            <h2 className="mt-5">Replacing Rear Brake Pads</h2>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col>
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
                                        <td>
                                            <li>Duralast Brake Rotor 31163</li>
                                            <li>Duralast Brake Rotor 31084</li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Calipers</td>
                                        <td>8973010991</td>
                                        <td>Duralast Calipers MK8491</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="pt-5 pb-4">Replace Rear Pads</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Step 1 - Loosen Lug Nuts</h4>
                        </Col>
                    </Row>
                    <Row className="pb-4">
                        <Col>
                            <p>In order to get the best purchase on the front lug nuts, engage the parking/emergency brake (if none is available/not working, put a brick behind the back wheel) put your 1/2" breaker bar on the appropriate socket size (usually 17-21mm) and turn counter-clockwise with the car on he ground. Remember, you're loosening, NOT removing. Get the lugs loose enough that you'll be able to take them off with a regular ratchet. When working on the rear, put bricks behind the front wheels and engage the parking brake to give yourself the best chance of removing the lug nuts. Release the parking brake when the wheel is off.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Step 2 - Raise Vehicle</h4>
                        </Col>
                    </Row>
                    <Row className="pb-4">
                        <Col>
                            <p>Put the hydraulic jack underneath either the car's frame rail or factory jacking points on the side of the car. These can usually be seen as the dimpled pieces of protruding metal on the bottom of the car. Some German cars have black rubber pads that serve as the jacking points. Place jack stands underneath the car, rest car on jack stands, making sure that its weight cannot shift. You can now remove the wheels. Now is also a great time to clean your wheels of all brake dust. I used a Wagner Steam Cleaner and some Simple Green degreaser.  Rest the caliper on the suspension, or use zip-ties or a bungee to secure it to a place where it can't hang. Don't put any strain on the brake line.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Step 3 - Loosen Caliper</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>There should be (2) 12mm or 14mm bolts on the caliper. Remove them and the caliper should be able to slide out. If the caliper doesn't slide out easily, use a pry bar or flat head screwdriver and pry it out.</p>
                        </Col>
                        <Col className="pb-4">
                            <Image src={brakes3}></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Step 4 - Remove Caliper Carrier</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Remove the (2) 17mm or 19mm bolts on the rear of the hub that keep the caliper carrier on. These are on tight, so use a breaker bar with a mallet or an impact gun if you can.</p>
                        </Col>
                        <Col>
                            <Image src={brakes4}></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        );

    }
}