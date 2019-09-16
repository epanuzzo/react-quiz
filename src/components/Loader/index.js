import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return (
        <div className="pt-3 pb-4 text-center">
            <Spinner animation="border" variant="primary" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loader;
