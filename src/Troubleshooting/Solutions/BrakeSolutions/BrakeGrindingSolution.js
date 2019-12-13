import React from 'react';
import { Card, Button } from 'react-bootstrap';
import brakes1 from '../../../assets/images/brakes_1.jpg';

export default class BreakGrindingSolution extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={brakes1} />
                    <Card.Body>
                        <Card.Title>Replacing Brake Pads</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        );

    }
}