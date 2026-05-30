import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Plan from '../pages/planPage';

const PlanStack = createNativeStackNavigator();

const PlanStackScreen = () => {
  return (
    <PlanStack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <PlanStack.Screen
        name='PlanPage'
        component={Plan}
        options={{ orientation: 'portrait' }}
      />
    </PlanStack.Navigator>
  );
};

export default PlanStackScreen;
