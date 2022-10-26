import { takeEvery, put } from 'redux-saga/effects'
import { GET_QUOTE, GET_QUOTE_SUCCESS } from '../constant';

function* getQuote() {
    let data = yield fetch('https://zenquotes.io/api/today');
    data = yield data.json();
    yield put({type: GET_QUOTE_SUCCESS, data})
}

function* quoteSaga() {
    yield takeEvery(GET_QUOTE, getQuote)
}

export default quoteSaga;