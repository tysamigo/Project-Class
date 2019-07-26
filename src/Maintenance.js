/* eslint-disable no-unused-expressions */
import React from 'react';
import { Table, Container } from 'react-bootstrap';
import Axios from 'axios';

class Maintenance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            partsArray: []
        };
    }

    componentDidMount() {
        this.loadPartData();
    }

    loadPartData() {
        Axios.get("https://webapi20190630041009.azurewebsites.net/api/parts")
            .then((response) => {
                this.setState({ maintenanceArray: response.data });
            });
    }

    render() {
        return <Container>
        <h1 mb="0">Maintenance</h1>
        <p>This list contains maintenance information.</p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Service Performed</th>
                    <th>Total Cost</th>
                </tr>
            </thead>
            <tbody>
                {this.state.partsArray.splice(0, 15).map((part, index) => 
                    <tr key={`part-${index}`}>
                        <td>{part.partName}</td>
                        <td>{part.partNumber}</td>
                        <td>{part.supplier}</td>
                        <td>${part.unitPrice.toFixed(2)}</td>
                        <td>{part.notes}</td>
                    </tr>
                )}
            </tbody>
        </Table>
        </Container>
    }
}

export default Maintenance;