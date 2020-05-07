/**
 * 时间：2020/4/30
 * 作者：liushun
 * 首页
 * **/
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import IndexAction from '../Store/Reducer/IndexReducer';
import BaseComponent from '../Component/BaseComponent';

class Index extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {
    this.props.indexFetch();
  }

  render() {
    return <View style={{}} />;
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({
  indexFetch: () => dispatch(IndexAction.indexFetch()),
});

export default connect(mapState, mapDispatch)(Index);
