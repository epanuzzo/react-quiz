import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

class Questions extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Header className="text-center">
                                <h1>What can be done here?</h1>
                            </Card.Header>
                            <Card.Body className="text-left">
                                <Row>
                                    <Col md={6} className="mb-3"><Button variant="outline-dark" block>Answer 1</Button></Col>
                                    <Col md={6} className="mb-3"><Button variant="outline-dark" block>Other option to choose</Button></Col>
                                    <Col md={6} className="mb-3"><Button variant="outline-dark" block>Ask your parents</Button></Col>
                                    <Col md={6} className="mb-3"><Button variant="outline-dark" block>All answers are correct</Button></Col>
                                </Row>
                                <ProgressBar now={50} srOnly />
                                <hr />
                                <Row className="pt-1">
                                    <Col md={{ span: 6, offset: 3 }}><Button variant="primary" block>Next</Button></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Questions; 
