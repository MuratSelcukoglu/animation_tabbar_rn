import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/homePage';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <HomeStack.Screen
        name='HomePage'
        component={Home}
        options={{ orientation: 'portrait' }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
