/* eslint-disable no-unused-expressions */
import React from 'react';
import { Table, Container } from 'react-bootstrap';

export default class Parts extends React.Component {

    render() {
        return (
        <Container className="heading pb-5">
            <h1 className="mt-5">Parts</h1>
            <Table striped bordered hover>               
            </Table>
        </Container>
        );
    }
}