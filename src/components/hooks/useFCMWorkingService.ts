import React from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

function useFCMWorkingService() {
  // foreground state message
  const onNotificationOpenedApp = () => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });
  };

  // Check whether an initial notification is available
  const getInitialNotification = () => {
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        // setLoading(false);
      });
  };

  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  // SIDE EFFECT: app push notification navigation route setting
  React.useEffect(() => {
    onNotificationOpenedApp();
    getInitialNotification();
  }, []);
}

export default useFCMWorkingService;
