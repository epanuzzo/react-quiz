import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from 'SERVICES/history';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Loader from 'COMPONENTS/Loader';

import { QUIZES_GET, QUIZES_DONE, QUIZES_CLEAR } from 'CONSTANTS';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: null,
            quiz: null,
            error: false
        };
    }

    componentDidMount() {
        if (!this.props.quizes || this.props.quizes.length === 0) {
            this.props.getQuizes();
        }

        this.props.clear();
    }

    handleName(e) {
        this.setState({ name: (e.target.value.length > 2) ? e.target.value : null });
    }

    handleQuiz(e) {
        this.setState({ quiz: (e.target.value !== '0') ? e.target.value : null });
    }

    handleSubmit(e) {
        if (!this.state.name || !this.state.quiz) {
            this.setState({ error: true });

            setTimeout(() => {
                this.setState({ error: false });
            }, 2000);
        } else {
            this.props.setFormData({ name: this.state.name, quizeId: this.state.quiz });
            history.push('questions');
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
                            <Form.Group controlId="userName">
                                <Form.Label>Enter your name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleName.bind(this)}/>
                            </Form.Group>
                            {(!this.props.quizes || this.props.quizes.length === 0)
                                ? <Loader />
                                : <Form.Group controlId="userQuiz">
                                    <Form.Label>Select quiz</Form.Label>
                                    <Form.Control as="select" name="quiz" onChange={this.handleQuiz.bind(this)}>
                                        <option value="0"></option>
                                        {this.props.quizes.map(item => (<option key={item.id} value={item.id}>{item.title}</option>))}
                                    </Form.Control>
                                </Form.Group>}
                            {(this.state.error) && <Alert variant='danger'>
                                You should write your name (at least 3 symbols) and choose quiz type.
                            </Alert>}
                            <Row>
                                <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
                                    <Button variant="primary" block onClick={this.handleSubmit.bind(this)}>Go!</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

Home.propTypes = {
    getQuizes: PropTypes.func.isRequired,
    setFormData: PropTypes.func.isRequired,
    quizes: PropTypes.array
}

Home.defaultProps = {
  quizes: [],
  getQuizes: () => {},
  setFormData: () => {}
};

function mapStateToProps(state) {   
    return { quizes: state.home.quizes }
}

function mapDispatchToProps(dispatch) {
    return {
        getQuizes: () => dispatch({ type: QUIZES_GET }),
        setFormData: (payload) => dispatch({ type: QUIZES_DONE, payload }),
        clear: () => dispatch({ type: QUIZES_CLEAR }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 
