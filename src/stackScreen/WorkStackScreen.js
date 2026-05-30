import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Work from '../pages/workPage';

const WorkStack = createNativeStackNavigator();

const WorkStackScreen = () => {
  return (
    <WorkStack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <WorkStack.Screen
        name='WorkPage'
        component={Work}
        options={{ orientation: 'portrait' }}
      />
    </WorkStack.Navigator>
  );
};

export default WorkStackScreen;
