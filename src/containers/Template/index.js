import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Navigation from 'COMPONENTS/Navigation';

class App extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <Container className="content">
                    { this.props.children }
                </Container>
            </>
        );
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired
}

export default App; 
