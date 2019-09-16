import { all } from 'redux-saga/effects';
import homeRoot from './home';
import questionsRoot from './questions';
import answersRoot from './answers';
import resultsRoot from './results';

export default function* rootSaga() {
  yield all([
    homeRoot(),
    questionsRoot(),
    answersRoot(),
    resultsRoot(),
  ])
}
