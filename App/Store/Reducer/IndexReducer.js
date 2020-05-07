/**
 * 日前：2020/4/29
 * 作者：liushun
 * 首页 Reducer
 * **/

import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const {Types, Creators} = createActions({
  getScrollPic: ['scrollPics'],
  indexFetch: [],
});

export default Creators;

const INITIAL_STATE = Immutable({
  scrollPic: [], //首页轮播图
});

const getScrollPic = (state = INITIAL_STATE, action) => {
  return state.merge({scrollPic: action.scrollPics});
};

const HANDLERS = {
  [Types.GET_SCROLL_PIC]: getScrollPic,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
