import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Router, Route, Switch } from 'react-router';
import history from 'SERVICES/history';

import * as serviceWorker from './serviceWorker';

import rootSaga from './sagas';
import rootReducer from './reducers';
import Template from 'CONTAINERS/Template';
import Home from 'CONTAINERS/Home';
import Questions from 'CONTAINERS/Questions';
import Results from 'CONTAINERS/Results';
import ErrorBoundary from 'COMPONENTS/ErrorBoundary';
import Error404 from 'COMPONENTS/Error404';

import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <ErrorBoundary>
                <Template>
                    <Switch>
                        <Route
                            path="/"
                            render={() => (
                                <ErrorBoundary>
                                    <Home />
                                </ErrorBoundary>
                            )}
                            exact
                        />
                        <Route
                            path="/questions"
                            render={() => (
                                <ErrorBoundary>
                                    <Questions />
                                </ErrorBoundary>
                            )}
                            exact
                        />
                        <Route
                            path="/results"
                            render={() => (
                                <ErrorBoundary>
                                    <Results />
                                </ErrorBoundary>
                            )}
                            exact
                        />
                        <Route component={Error404} />
                    </Switch>
                </Template>
            </ErrorBoundary>
        </Router>
    </Provider>,
    rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
