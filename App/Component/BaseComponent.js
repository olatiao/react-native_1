/**
 * 日前：2020/4/30
 * 作者：liushun
 * 基础的 Component， 建议页面基础此组件
 * 1. 优化 shouldComponentUpdate
 * **/

import React from 'react';
import lodash from 'lodash';

export default class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState): boolean {
    if (
      lodash.isEqual(nextProps, this.props) &&
      lodash.isEqual(nextState, this.state)
    ) {
      return false;
    }
    return true;
  }
}
