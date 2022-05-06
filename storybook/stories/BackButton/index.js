import React from 'react';
import PropTypes from 'prop-types';
import {Pressable, View, StyleSheet} from 'react-native';
import LeftArrow from '../../../icons/LeftArrow.svg';

export const BackButton = props => {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={props.goBackFn}>
        <LeftArrow />
      </Pressable>
    </View>
  );
};

BackButton.defaultProps = {
  goBackFn: () => {},
};

BackButton.propTypes = {
  goBackFn: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    width: 25,
    height: 25,
    backgroundColor: '#008ACE',
  },
});
