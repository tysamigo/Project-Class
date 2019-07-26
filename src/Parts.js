/* eslint-disable no-unused-expressions */
import React from 'react';
import { Table, Container } from 'react-bootstrap';
import Axios from 'axios';

class Parts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            partsArray: []
        };
    }

    componentDidMount() {
        this.loadPartData();
    }

    /**
     * @summary API Call #3: Perform a GET call to the API for parts data
     */
    loadPartData() {
        Axios.get("https://webapi20190630041009.azurewebsites.net/api/parts")
            .then((response) => {
                // Store the list of maintenance entries in the
                // component state
                this.setState({ partsArray: response.data });
            });
    }

    render() {
        return <Container>
            <h1>Parts</h1>
            <p>An API was created for this project and is hosted on a temporary Azure account.  This parts list, containing real parts information created from my real-life Isuzu VehiCross restoration project, is being generated via an API Call.
            This is API Call #3.</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Part Number</th>
                        <th>Supplier</th>
                        <th>Price</th>
                        <th>Notes</th>
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

export default Parts;