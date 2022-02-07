import React, {FC} from 'react';
import {View, SafeAreaView, StyleSheet, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext} from './react-native-src/AppContext/AppContext';
import {useGetAppContext} from './react-native-src/AppContext/useGetAppContext';
import {AppDrawerNavigation} from './react-native-src/navigation/AppDrawerNavigation';
import {GlobalErrorModal} from './react-native-src/errorHandling/GlobalErrorModal';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App: FC = () => {
  const appContext = useGetAppContext();

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

export default App;

const styles = StyleSheet.create({
  appWrapper: {backgroundColor: '#FFF', height: '100%'},
});
