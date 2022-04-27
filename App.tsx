import React, {FC, useEffect, useRef} from 'react';
import {View, SafeAreaView, StyleSheet, NativeModules} from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {AppContext} from './react-native-src/AppContext/AppContext';
import {useGetAppContext} from './react-native-src/AppContext/useGetAppContext';
import {AppDrawerNavigation} from './react-native-src/navigation/AppDrawerNavigation';
import {GlobalErrorModal} from './react-native-src/errorHandling/GlobalErrorModal';
import Analytics from 'appcenter-analytics';
// import Crashes from 'appcenter-crashes';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App: FC = () => {
  const appContext = useGetAppContext();

  useEffect(() => {
    Analytics.trackEvent('application started');
    // Crashes.generateTestCrash(); // mock crash
  }, []);

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  return (
    <SafeAreaView>
      <View style={styles.appWrapper}>
        <AppContext.Provider value={appContext}>
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              routeNameRef.current =
                navigationRef.getCurrentRoute()?.name ??
                'undefined current route name';
              Analytics.trackEvent('onScreenOpen', {
                screenName: routeNameRef.current,
              });
            }}
            onStateChange={async () => {
              const previousRouteName = routeNameRef.current;
              const currentRouteName =
                navigationRef.getCurrentRoute()?.name ??
                'undefined current route name';

              if (previousRouteName !== currentRouteName) {
                Analytics.trackEvent('onScreenOpen', {
                  screenName: currentRouteName,
                });
              }

              routeNameRef.current = currentRouteName;
            }}>
            <AppDrawerNavigation />
          </NavigationContainer>
          <GlobalErrorModal />
        </AppContext.Provider>
      </View>
    </SafeAreaView>
  );
};

export default App; // comment this line to display Storybook

const styles = StyleSheet.create({
  appWrapper: {backgroundColor: '#FFF', height: '100%'},
});

// export {default} from './storybook'; // uncomment this line to display Storybook
