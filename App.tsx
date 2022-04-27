import React, {FC, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
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

  return (
    <SafeAreaView>
      <View style={styles.appWrapper}>
        <AppContext.Provider value={appContext}>
          <NavigationContainer>
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
