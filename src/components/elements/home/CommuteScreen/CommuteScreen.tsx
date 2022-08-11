import React from 'react';
import { View, Text } from 'native-base';
import CommonLayout from '@components/common/@Layout/CommonLayout';
import CommonHeader from '@components/common/@Layout/CommonHeader';

interface CommuteScreenProps {}

function CommuteScreen({}: CommuteScreenProps) {
  return (
    <CommonLayout h="100%">
      <CommonHeader text="출/퇴근" />
    </CommonLayout>
  );
}

export default CommuteScreen;
