import { select, all, takeLatest, put, call } from 'redux-saga/effects';
import { ANSWERS_GET, ANSWERS_SET, ANSWERS_ERROR } from 'CONSTANTS';
import { getAnswers } from 'SERVICES/APICalls';

function* getApi() {
    const state = yield select();
    try {
        const questionId = state.questions.list[state.questions.step].id;
        const answers = yield call(getAnswers, state.home.data.quizeId, questionId);
        yield put({ type: ANSWERS_SET, payload: { [questionId]: answers.data } });
    } catch (e) {
        yield put({ type: ANSWERS_ERROR, payload: { error: e } });
    }
}

export function* answers(payload) {
    yield takeLatest(ANSWERS_GET, getApi);
}

export default function* homeRoot() {
  yield all([
    answers()
  ])
}
