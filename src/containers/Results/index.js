import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from 'SERVICES/history';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loader from 'COMPONENTS/Loader';

import { RESULTS_GET } from 'CONSTANTS';

class Results extends React.Component {
    componentDidMount() {
        if (!this.props.quizDetails || !this.props.quizDetails.name) {
            history.push('/');
        }

        if (!this.props.results) {
            this.props.getResults();
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Header className="text-center">
                                <h1>Thanks, { this.props.quizDetails && this.props.quizDetails.name }</h1>
                            </Card.Header>
                            <Card.Body className="text-center">
                                {!this.props.results
                                    ? <Loader />
                                    : <span>You responded correctly to {this.props.results.correct} out of {this.props.results.total} questions.</span>} 
                                <div className="pt-4">
                                    <Button onClick={() => { history.push('/') }}>Go home</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Results.propTypes = {
    quizDetails: PropTypes.object,
    questions: PropTypes.object
}

Results.defaultProps = {
    quizDetails: {},
    questions: {}
};

function mapStateToProps(state) {   
    return {
        quizDetails: state.home.data,
        questions: state.answers.list,
        results: state.results.details
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getResults: () => dispatch({ type: RESULTS_GET })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results); 