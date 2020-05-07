/**
 * 日前：2020/4/29
 * 作者：liushun
 * 用户 Reducer
 * **/

import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  setPageName: ['object'],
});

export default Creators;

const INITIAL_STATE = Immutable({
  pageName: 'no',
  object: {'1': '1', a: {'1': '1', '2': '2'}},
});

const setPageName = (state = INITIAL_STATE, action) => {
  return state.merge({object: action.object});
};

const HANDLERS = {
  [Types.SET_PAGE_NAME]: setPageName,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
