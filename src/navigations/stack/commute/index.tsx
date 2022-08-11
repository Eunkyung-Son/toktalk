import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CommuteScreen from '@components/elements/commute/CommuteScreen';
import RouletteScreen from '@components/elements/commute/RouletteScreen';

const Commute = createStackNavigator();

function CommuteNavigation() {
  return (
    <Commute.Navigator>
      <Commute.Screen name="Commute" component={CommuteScreen} />
      <Commute.Screen name="Roulette" component={RouletteScreen} />
    </Commute.Navigator>
  );
}

export default CommuteNavigation;
