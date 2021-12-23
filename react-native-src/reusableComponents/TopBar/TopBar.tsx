import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BurgerMenuIcon from '../../../icons/BurgerMenuIcon.svg';
import BucketIcon from '../../../icons/BucketIcon.svg';

export const TopBar: FC = () => (
  <View style={styles.topBarWrapper}>
    <BurgerMenuIcon />
    <Text style={styles.topBarText}>Ecommerce Store</Text>
    <BucketIcon />
  </View>
);

export const styles = StyleSheet.create({
  topBarWrapper: {
    height: 55,
    backgroundColor: '#008ACE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 13,
  },
  topBarText: {
    fontFamily: 'Roboto',
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: '500',
  },
});
