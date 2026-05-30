import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../stackScreen/HomeStackScreen';
import PlanStackScreen from '../stackScreen/PlanStackScreen';
import AccountStackScreen from '../stackScreen/AccountStackScreen';
import WorkStackScreen from '../stackScreen/WorkStackScreen';

import CustomTabBar from './customTabbar';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
        tabBar={props => <CustomTabBar {...props} />}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        {/* <Tab.Screen name='Plan' component={PlanStackScreen} /> */}
        <Tab.Screen name='Work' component={WorkStackScreen} />
        <Tab.Screen name='Account' component={AccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
