import { select, all, takeLatest, put, call } from 'redux-saga/effects';
import { QUESTIONS_GET, QUESTIONS_SET, QUESTIONS_ERROR, ANSWERS_CLEAR, QUESTIONS_CLEAR, RESULTS_CLEAR, QUIZES_CLEAR } from 'CONSTANTS';
import { getQuestions } from 'SERVICES/APICalls';

function* getApi() {
    const state = yield select();
    try {
        const questions = yield call(getQuestions, state.home.data.quizeId);
        yield put({ type: QUESTIONS_SET, payload: questions.data });
    } catch (e) {
        yield put({ type: QUESTIONS_ERROR, payload: { error: e } });
    }
}

function* clearProps() {
    yield put({ type: ANSWERS_CLEAR });
    yield put({ type: QUESTIONS_CLEAR });
    yield put({ type: RESULTS_CLEAR });
}

export function* questions(payload) {
    yield takeLatest(QUESTIONS_GET, getApi);
}

export function* clear(payload) {
    yield takeLatest(QUIZES_CLEAR, clearProps);
}

export default function* homeRoot() {
  yield all([
    questions(),
    clear()
  ])
}
