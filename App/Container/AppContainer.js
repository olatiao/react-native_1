/**
 * 日前：2020/4/29
 * 作者：liushun
 * App 路由
 * **/

import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from '../Page/Index';
import News from '../Page/News';
import Doctor from '../Page/Doctor';
import My from '../Page/My';
import Assets from '../Constants/Assets';
import {scaleSizeW, scaleSizeH} from '../Util/Tool';
const Tab = createBottomTabNavigator();

const tabImg = {
  index: {
    active: Assets.index_active,
    normal: Assets.index,
  },
  news: {
    active: Assets.news_active,
    normal: Assets.news,
  },
  doctor: {
    active: Assets.doctor_active,
    normal: Assets.doctor,
  },
  me: {
    active: Assets.me_active,
    normal: Assets.me,
  },
};

export default function AppNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="index"
        tabBarOptions={{
          activeTintColor: '#148AFF', // 文字和图片选中颜色
          inactiveTintColor: '#939393', // 文字和图片未选中颜色
          style: {
            backgroundColor: '#fff',
            borderTopColor: '#ddd',
            borderTopWidth: 1,
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return focused ? (
              <Image
                source={tabImg[route.name].active}
                style={{width: scaleSizeW(40), height: scaleSizeH(40)}}
                resizeMode={'contain'}
              />
            ) : (
              <Image
                source={tabImg[route.name].normal}
                style={{width: scaleSizeW(40), height: scaleSizeH(40)}}
                resizeMode={'contain'}
              />
            );
          },
        })}>
        <Tab.Screen
          name="index"
          component={Index}
          options={{tabBarLabel: '首页'}}
        />
        <Tab.Screen
          name="news"
          component={News}
          options={{tabBarLabel: '资讯'}}
        />
        <Tab.Screen
          name="doctor"
          component={Doctor}
          options={{tabBarLabel: '导医'}}
        />
        <Tab.Screen name="me" component={My} options={{tabBarLabel: '我'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
