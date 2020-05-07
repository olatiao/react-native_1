/**
 * 日前：2020/4/29
 * 作者：liushun
 * sagas
 * **/

import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {Types} from '../Store/Reducer/IndexReducer';
import ApiUtil from '../Service/ApiUtil';

const Api = ApiUtil.api();

function* IndexFetch(action) {
  console.tron.log('d');
  try {
    console.tron.log(action);
    const data = yield call(Api.getScrollPics);
    // console.tron.log(data);
    // yield put({type: 'dd', pageName: action.payload.pageName});
  } catch (e) {
    // yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}


function* rootSaga() {
  yield takeLatest('INDEX_FETCH', IndexFetch);
}

export default rootSaga;
