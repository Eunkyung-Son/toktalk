import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MypageScreen from '@components/elements/mypage/MypageScreen';
import CommuteManageScreen from '@components/elements/mypage/CommuteManageScreen';

const Mypage = createStackNavigator();

function MypageNavigation() {
  return (
    <Mypage.Navigator>
      <Mypage.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          headerShown: false,
        }}
      />
      <Mypage.Screen
        name="CommuteManage"
        component={CommuteManageScreen}
        options={{
          headerShown: false,
        }}
      />
    </Mypage.Navigator>
  );
}

export default MypageNavigation;
