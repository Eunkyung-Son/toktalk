import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import SplashScreen from '@components/elements/splash';
import useFCMPermissionService from '@components/hooks/useFCMPermissionService';
import useFCMWorkingService from '@components/hooks/useFCMWorkingService';

import Navigations from '@navigations/index';

import withAppProvider from './src/contexts/app/app.provider';
import { MY_IMAGES } from '@generated/images/images';

type ImagesType = { [x: string]: Obj | string };

const App = () => {
  useFCMPermissionService();
  useFCMWorkingService();

  const [appIsReady, setAppIsReady] = React.useState(false);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      setTimeout(() => {
        setAppIsReady(false);
      }, 2000);
    }
  }, [appIsReady]);

  const imageObjToFlatArray: Function = (obj: ImagesType) => {
    return Object.values(obj).reduce((result, value) => {
      if (typeof value === 'object') {
        return result.concat(...imageObjToFlatArray(value));
      }
      return result.concat(value);
    }, [] as string[]);
  };

  const preLoadImage = (images: ImageSourcePropType[]) => {
    return Promise.all(
      images.map((image) =>
        Image.prefetch(Image.resolveAssetSource(image).uri),
      ),
    );
  };

  React.useEffect(() => {
    async function prepare() {
      try {
        // FIXME:
        // Keep the splash screen visible while we fetch resources
        // make any API calls need to do here
        // 스플래시 화면 로딩 진행하는 동안 font, image pre-loading 할 경우가 없다면
        // app.json 에서 스플래시 로딩하기
        await preLoadImage(imageObjToFlatArray(MY_IMAGES));
        setAppIsReady(true);
      } catch (e: any) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  return (
    <>
      {appIsReady ? (
        <SplashScreen onLayoutRootView={onLayoutRootView} />
      ) : (
        <Navigations />
      )}
    </>
  );
};

export default withAppProvider(App);
