import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from 'SERVICES/history';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Loader from 'COMPONENTS/Loader';

import { QUESTIONS_GET, ANSWERS_GET, QUESTIONS_STEP, QUESTIONS_ANSWER } from 'CONSTANTS';

class Questions extends React.Component {
    constructor() {
        super();
        this.state = {
            progress: 0
        };
    }

    componentDidMount() {
        if (!this.props.quizDetails || !this.props.quizDetails.name || !this.props.quizDetails.quizeId) {
            history.push('/');
        }

        if (!this.props.questions || this.props.questions === 0) {
            this.props.getQuestions();
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.questions && this.props.questions) {
            this.props.getAnswers();
        }
        
        if (prevProps.step !== this.props.step) {
            this.setState({ progress: ((100/Object.keys(this.props.questions).length) * this.props.step).toFixed(2) });
            this.props.getAnswers();
        }
    }

    handleClick() {
        const nextStep = parseInt(this.props.step) + 1;
        if (nextStep < Object.keys(this.props.questions).length) {
            this.props.nextStep(nextStep);
        } else {
            history.push('results');
        }
    }

    selectAnswer(value) {
        this.props.setAnswer(this.props.step, value);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        {!this.props.questions
                            ? <Loader />
                            : <Card>
                                <Card.Header className="text-center">
                                    <h1>{ this.props.questions[this.props.step].title }</h1>
                                </Card.Header>
                                <Card.Body className="text-left">
                                    {(Object.keys(this.props.answers).length === 0 || !this.props.answers[this.props.questions[this.props.step].id])
                                        ? <Loader />
                                        : <Row>
                                            {this.props.answers[this.props.questions[this.props.step].id].map(answer =>
                                                (<Col md={6} className="mb-3" key={answer.id}><Button variant={(this.props.questions[this.props.step].answer && this.props.questions[this.props.step].answer === answer.id) ? 'dark' : 'outline-dark'} block value={answer.id} onClick={() => this.selectAnswer(answer.id)}>{ answer.title }</Button></Col>) 
                                            )}
                                        </Row>}
                                    <ProgressBar now={this.state.progress} srOnly />
                                    <hr />
                                    <Row className="pt-1">
                                        <Col md={{ span: 6, offset: 3 }}><Button variant="primary" block disabled={!this.props.questions[this.props.step].answer} onClick={() => this.handleClick()}>Next</Button></Col>
                                    </Row>
                                </Card.Body>
                            </Card>}
                    </Col>
                </Row>
            </Container>
        );
    }
}

Questions.propTypes = {
    quizDetails: PropTypes.object,
    getQuestions: PropTypes.func.isRequired
}

Questions.defaultProps = {
    quizDetails: {},
    questions: [],
    getQuestions: () => {}
};

function mapStateToProps(state) {   
    return {
        quizDetails: state.home.data,
        questions: state.questions.list,
        step: state.questions.step,
        answers: state.answers.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getQuestions: () => dispatch({ type: QUESTIONS_GET }),
        getAnswers: () => dispatch({ type: ANSWERS_GET }),
        nextStep: (step) => dispatch({ type: QUESTIONS_STEP, payload: step }),
        setAnswer: (step, answer) => dispatch({ type: QUESTIONS_ANSWER, payload: { step, answer } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);  
