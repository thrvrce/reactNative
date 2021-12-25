import React, {FC, ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TopBarProps {
  leftBlock?: ReactElement | ReactElement[];
  text?: string;
  rightBlock?: ReactElement | ReactElement[];
}
export const TopBar: FC<TopBarProps> = props => {
  const {leftBlock, text, rightBlock} = props;
  return (
    <View style={styles.topBarWrapper}>
      <View style={styles.block}>{leftBlock}</View>
      <Text style={styles.topBarText}>{text}</Text>
      <View style={styles.block}>{rightBlock}</View>
    </View>
  );
};

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
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
