import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import LoginScreen from '@components/elements/auth/LoginScreen';
import SignupScreen from '@components/elements/auth/SignupScreen';
import ExampleModalScreen from '@components/elements/auth/ExampleModalScreen';
import StartLoginSignupScreen from '@components/elements/auth/StartLoginSignupScreen';

const Auth = createStackNavigator();

function AuthStackNavigation() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="StartLoginSignup"
        component={StartLoginSignupScreen}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Group
        screenOptions={{
          cardStyle: { backgroundColor: 'transparent' },
          headerShown: false,
          presentation: 'transparentModal',
          cardOverlayEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      >
        <Auth.Screen name="Modal" component={ExampleModalScreen} />
      </Auth.Group>
    </Auth.Navigator>
  );
}

export default AuthStackNavigation;
