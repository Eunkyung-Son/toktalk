import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@components/elements/home/HomeScreen';
import CountScreen from '@components/elements/home/CountScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeTab"
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="CountTab" component={CountScreen} />
    </Tab.Navigator>
  );
}
