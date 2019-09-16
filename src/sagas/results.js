import { select, all, takeLatest, put, call } from 'redux-saga/effects';
import { RESULTS_GET, RESULTS_SET, RESULTS_ERROR } from 'CONSTANTS';
import { getResults } from 'SERVICES/APICalls';

function* getApi() {
    const state = yield select();
    try {
        const results = yield call(getResults, state.home.data.quizeId, Object.values(state.questions.list).map((item) => { return item.answer }));
        yield put({ type: RESULTS_SET, payload: results.data });
    } catch (e) {
        yield put({ type: RESULTS_ERROR, payload: { error: e } });
    }
}

export function* results(payload) {
    yield takeLatest(RESULTS_GET, getApi);
}

export default function* homeRoot() {
  yield all([
    results()
  ])
}
