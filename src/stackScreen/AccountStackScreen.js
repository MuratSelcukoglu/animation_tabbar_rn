import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../pages/accountPage';

const AccountStack = createNativeStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <AccountStack.Screen
        name='AccountPage'
        component={Account}
        options={{ orientation: 'portrait' }}
      />
    </AccountStack.Navigator>
  );
};

export default AccountStackScreen;
