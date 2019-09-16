import ls from 'local-storage';
import { all, takeLatest, put, call } from 'redux-saga/effects';
import { QUIZES_GET, QUIZES_SET, QUIZES_ERROR, type } from 'CONSTANTS'
import { getQuizes } from 'SERVICES/APICalls'

function* getApi() {
    try {
        const quizes = yield call(getQuizes);
        ls.clear();
        ls.set(type.quizes, quizes.data);
        yield put({ type: QUIZES_SET, payload: quizes.data });
    } catch (e) {
        yield put({ type: QUIZES_ERROR, payload: { error: e } });
    }
}

export function* quizes() {
    yield takeLatest(QUIZES_GET, getApi);
}

export default function* homeRoot() {
  yield all([
    quizes()
  ])
}
