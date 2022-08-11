import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@components/elements/home/HomeScreen';
import CountScreen from '@components/elements/home/CountScreen';

const Home = createStackNavigator();

function HomeNavigation() {
  return (
    <Home.Navigator>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Count" component={CountScreen} />
    </Home.Navigator>
  );
}

export default HomeNavigation;
