import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabs from './tab';
import AuthStackNavigation from './stack/auth';

/**
 *
 * 각 스크린의 이름은 항상 고유해야 합니다.
 * stack, tab navigation 을 분리하여 구조를 생성해주세요.
 *
 * @see https://reactnavigation.org/docs/getting-started
 *
 */
const Root = createStackNavigator();

export default function Navigations() {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="AuthStackNavigation">
        <Root.Screen
          options={{
            headerShown: false,
          }}
          name="AuthStackNavigation"
          component={AuthStackNavigation}
        />
        <Root.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}
