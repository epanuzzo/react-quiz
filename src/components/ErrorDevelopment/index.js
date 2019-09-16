import React from 'react';
import PropTypes from 'prop-types';

function ErrorDevelopment({ error, errorInfo }) {
    return (
        <div className="text-center py-4 px-4">
            <h1 className="mb-4 text-primary">Something went wrong!</h1>
            { error && <div><b>Error:</b> { error.toString() } </div> }
            { errorInfo && <div><b>Details:</b> { errorInfo.componentStack }</div> }
          </div>
    );
}

ErrorDevelopment.propTypes = {
    error: PropTypes.object,
    errorInfo: PropTypes.object
}

ErrorDevelopment.defaultProps = {
  error: { error: null },
  errorInfo: { componentStack: null }
};

export default ErrorDevelopment;
