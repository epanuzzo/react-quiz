import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Results extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Header className="text-center">
                                <h1>Thanks, Janis</h1>
                            </Card.Header>
                            <Card.Body className="text-center">
                                You responded correctly to 3 out of 4 questions. 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Results; 