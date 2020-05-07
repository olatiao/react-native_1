/**
 * 日前：2020/4/29
 * 作者：liushun
 * 网络请求
 * **/

import axios from 'axios';
import config from '../Config';
let Buffer = require('buffer').Buffer;

const create = () => {
  let token = new Buffer('anonymoususer' + ':' + 'aNonYmous@)!*8').toString('base64');
  const instance = axios.create({
    baseURL: config.baseURL,
    timeout: 3000,
    headers: {
      Authorization:
        'Basic ' + token

    },
  });

  //请求拦截处理
  instance.interceptors.request.use(
    async function (config) {
      // 在发送请求之前做些什么
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    },
  );

  //返回拦截处理
  instance.interceptors.response.use(
    function (response) {
      // 对响应数据做点什么
      return response;
    },
    function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    },
  );

  let params = {
    '/yn.activity/get-activity-by-top-one': {
      companyId: 20116,
      serviceContextExt: 'com.rainon.microserver.service.ServiceContextExt',
    },
  };

  const getScrollPics = (param) => instance.post('', {...params});

  return {
    getScrollPics,
  };
};

export default {
  create,
};
