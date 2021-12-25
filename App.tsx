import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

import {MainScreen} from './react-native-src/pages/Main/Main';
import {ProductDetails} from './react-native-src/pages/ProductDetails/ProductDetails';
import {productsMocks} from './react-native-src/pages/Main/productsMocks';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.appWrapper}>
        {/* <MainScreen /> */}
        <ProductDetails {...productsMocks[0]} />
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  appWrapper: {backgroundColor: '#FFF', height: '100%'},
});
