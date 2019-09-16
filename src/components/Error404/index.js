import React from 'react';
import Button from 'react-bootstrap/Button';
import history from 'SERVICES/history';

import './Error404.scss';
import logo from 'IMAGES/next-404.png';

function Error404(props) {
    return (
        <div className="text-center px-4">
            <h1 className="text-primary">Something went wrong!</h1>
            <div className="error-image">
                <img src={ logo } alt="Logo" />
            </div>
            <div>
                <Button onClick={() => { history.push('/') }}>Go home</Button>
            </div>
        </div>
    );
}

export default Error404;
