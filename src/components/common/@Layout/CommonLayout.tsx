import React from 'react';
import { Dimensions, SafeAreaView, StatusBar } from 'react-native';

import { View } from 'native-base';

import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';
import { IColors } from 'native-base/lib/typescript/theme/base/colors';

interface CommonLayoutProps extends IViewProps {
  children: JSX.Element | JSX.Element[];
  bgColor?: IColors | string;
  p?: number | string;
  h?: string | number;
}

export function CommonLayout({
  children,
  bgColor,
  p,
  h = Dimensions.get('screen').height,

  ...basisProps
}: CommonLayoutProps) {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: bgColor,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <View pt="15px" p={p} {...basisProps}>
        {children}
      </View>
    </SafeAreaView>
  );
}

export default CommonLayout;
