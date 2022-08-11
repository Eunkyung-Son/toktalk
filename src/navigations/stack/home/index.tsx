import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@components/elements/home/HomeScreen';

const Home = createStackNavigator();

function HomeNavigation() {
  return (
    <Home.Navigator>
      <Home.Screen name="Home" component={HomeScreen} />
    </Home.Navigator>
  );
}

export default HomeNavigation;
