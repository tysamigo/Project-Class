import React from 'react';
import * as pageNotFound from './assets/images/page_not_found.png';
import { Container } from 'react-bootstrap';

class NotFound extends React.Component {
    render() {
        return (
            <Container>
                <img src={pageNotFound} alt="page not found" style={{maxWidth:'100%'}} />
            </Container>
        );
    }
}

export default NotFound;