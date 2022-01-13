import React, {FC} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext} from './react-native-src/Context/AppContext';
import {useGetAppContext} from './react-native-src/Context/useGetAppContext';
import {AppDrawerNavigation} from './react-native-src/navigation/AppDrawerNavigation';

const App: FC = () => {
  const appContext = useGetAppContext();

  return (
    <SafeAreaView>
      <View style={styles.appWrapper}>
        <AppContext.Provider value={appContext}>
          <NavigationContainer>
            <AppDrawerNavigation />
          </NavigationContainer>
        </AppContext.Provider>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  appWrapper: {backgroundColor: '#FFF', height: '100%'},
});
