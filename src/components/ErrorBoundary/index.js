import React from 'react';
import ErrorDevelopment from 'COMPONENTS/ErrorDevelopment';
import Error404 from 'COMPONENTS/Error404';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo })
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    { (process.env.NODE_ENV === 'development') ? <ErrorDevelopment error={ this.state.error } errorInfo={ this.state.errorInfo } /> : <Error404 /> }
                </div>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;