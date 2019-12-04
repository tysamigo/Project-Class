/* eslint-disable no-unused-expressions */
import React from 'react';
import { Table, Container } from 'react-bootstrap';

class Parts extends React.Component {

    render() {
        return (
        <Container className="heading pb-5">
            <h1>Parts</h1>
            <Table striped bordered hover>               
            </Table>
        </Container>
        );
    }
}

export default Parts;