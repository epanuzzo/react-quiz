import { all } from 'redux-saga/effects';
import homeRoot from './home';

export default function* rootSaga() {
  yield all([
    homeRoot(),
  ])
}
