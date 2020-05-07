/**
 * 时间：2020/4/30
 * 作者：liushun
 * 导医
 * **/
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ApiUtil from '../Service/ApiUtil';
import UserAction from '../Store/Reducer/UserReducer';
import BaseComponent from '../Component/BaseComponent';

const Api = ApiUtil.api();

class Doctor extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    return <View style={{}} />;
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Doctor);
