import React from 'react';
import messaging from '@react-native-firebase/messaging';

/**
 *
 * ios => GoogleService-Info.plist
 * android => google-services.json
 * 위의 두가지 파일은 프로젝트 마다 새로 셋팅되어야 합니다.
 *
 *
 * @see https://rnfirebase.io/
 * @see https://rnfirebase.io/messaging/usage
 *
 */

function useFCMService() {
  const getFCMToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log(token);
    } catch (e) {
      console.log(e);
    }
  };

  const getAuthStatus = async () => {
    return await messaging().requestPermission();
  };

  const checkPermission = async () => {
    const authStatus = await getAuthStatus();
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };

  const permissionWork = async () => {
    try {
      const isAuth = await checkPermission();
      if (isAuth) {
        getFCMToken();
        return;
      }
      getAuthStatus();
    } catch (e) {
      console.log('permission rejected');
    }
  };

  // app push notification - permission
  React.useEffect(() => {
    permissionWork();
  }, []);
}

export default useFCMService;
