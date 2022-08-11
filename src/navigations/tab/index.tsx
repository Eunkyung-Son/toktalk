import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@components/elements/home/HomeScreen';
import MypageScreen from '@components/elements/mypage/MypageScreen';
import CommuteScreen from '@components/elements/commute/CommuteScreen';
import CommunityScreen from '@components/elements/home/CommunityScreen';
import MypageNavigation from '@navigations/stack/mypage';
import CommuteNavigation from '@navigations/stack/commute';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeTab"
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CommuteTab"
        component={CommuteNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CommunityTab"
        component={CommuteNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MypageTab"
        component={MypageNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
