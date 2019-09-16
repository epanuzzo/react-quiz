import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { QUIZES_GET } from 'CONSTANTS';

class Home extends React.Component {
    componentDidMount() {
        if (!this.props.quizes || this.props.quizes.length === 0) {
            this.props.getQuizes();
        }
    }

    render() {
        return (
            <Row className="align-items-center">
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header className="text-center">
                            <h1>Take your quiz</h1>
                        </Card.Header>
                        <Card.Body className="text-left">
                            <Form>
                                <Form.Group controlId="userName">
                                    <Form.Label>Enter your name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="userQuiz">
                                    <Form.Label>Select quiz</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Row>
                                    <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
                                        <Button variant="primary" type="submit" block>Go!</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

Home.propTypes = {
    getQuizes: PropTypes.func.isRequired,
    quizes: PropTypes.array
}

Home.defaultProps = {
  quizes: [],
  getQuizes: () => {}
};

function mapStateToProps(state) {   
    return { quizes: state.quizes }
}

function mapDispatchToProps(dispatch) {
    return { getQuizes: () => dispatch({ type: QUIZES_GET }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 
