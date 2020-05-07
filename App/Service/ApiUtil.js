/**
 * 日前：2020/4/29
 * 作者：liushun
 * 网络请求封装
 * **/

import Api from './index';

class ApiUtil {
  static api() {
    if (!ApiUtil.serviceApi) {
      ApiUtil.serviceApi = Api.create();
    }
    return ApiUtil.serviceApi;
  }

  static async request(route, params) {
    const Api = ApiUtil.api();

    if (!params) {
      params = [];
    }
    return await eval('Api.' + route)(params);
  }
}

export default ApiUtil;
